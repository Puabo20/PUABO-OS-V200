# Multi-stage Dockerfile for PUABO OS v2.0.0

# Base Node.js image
FROM node:18-alpine AS base
RUN corepack enable
WORKDIR /app

# Install dependencies
FROM base AS deps
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml* ./
COPY packages/frontend/package.json ./packages/frontend/
COPY packages/admin/package.json ./packages/admin/
COPY packages/backend/package.json ./packages/backend/
RUN pnpm install --frozen-lockfile

# Build frontend
FROM base AS frontend-builder
COPY --from=deps /app/node_modules ./node_modules
COPY packages/frontend ./packages/frontend
COPY package.json pnpm-workspace.yaml ./
WORKDIR /app/packages/frontend
RUN pnpm build

# Build admin
FROM base AS admin-builder
COPY --from=deps /app/node_modules ./node_modules
COPY packages/admin ./packages/admin
COPY package.json pnpm-workspace.yaml ./
WORKDIR /app/packages/admin
RUN pnpm build

# Production backend
FROM base AS backend
COPY --from=deps /app/node_modules ./node_modules
COPY packages/backend ./packages/backend
COPY package.json pnpm-workspace.yaml ./

# Copy built frontend and admin assets
COPY --from=frontend-builder /app/packages/frontend/dist ./packages/backend/public/frontend
COPY --from=admin-builder /app/packages/admin/dist ./packages/backend/public/admin

WORKDIR /app/packages/backend

# Create uploads directory
RUN mkdir -p uploads logs

EXPOSE 3002

CMD ["pnpm", "start"]