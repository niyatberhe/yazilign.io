-- Migration: Add performance indexes for dashboard queries
-- Description: Optimizes query performance for client discovery and provider workspace views

-- Index for filtering providers by role and availability status
CREATE INDEX IF NOT EXISTS idx_profiles_role_is_accepting
ON public.profiles(role, is_accepting_projects)
WHERE role = 'provider';

-- Index for filtering bookings by client
CREATE INDEX IF NOT EXISTS idx_bookings_client_id
ON public.bookings(client_id);

-- Index for filtering bookings by provider
CREATE INDEX IF NOT EXISTS idx_bookings_provider_id
ON public.bookings(provider_id);

-- Index for filtering bookings by status (useful for provider workspace)
CREATE INDEX IF NOT EXISTS idx_bookings_status
ON public.bookings(status);

-- Composite index for provider's pending bookings (common query in provider workspace)
CREATE INDEX IF NOT EXISTS idx_bookings_provider_status
ON public.bookings(provider_id, status)
WHERE status IN ('pending', 'accepted');

-- Index for created_at ordering (useful for recent bookings)
CREATE INDEX IF NOT EXISTS idx_bookings_created_at
ON public.bookings(created_at DESC);
