-- Create app_role enum for role management
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table for proper role management
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Policy for user_roles: users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Policy for user_roles: only admins can manage roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Drop the existing overly permissive SELECT policy on inquiries
DROP POLICY IF EXISTS "Inquiries are viewable by authenticated users" ON public.inquiries;

-- Create admin-only SELECT policy for inquiries
CREATE POLICY "Only admins can view inquiries"
ON public.inquiries
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Add explicit DENY for UPDATE on inquiries (only admins can update)
CREATE POLICY "Only admins can update inquiries"
ON public.inquiries
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Add explicit DENY for DELETE on inquiries (only admins can delete)
CREATE POLICY "Only admins can delete inquiries"
ON public.inquiries
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));