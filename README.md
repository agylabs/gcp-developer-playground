# GCP Developer Playground - Native Cloud Development Demo

## Overview
A comprehensive demonstration of Google Antigravity's ability to build, deploy, and manage GCP-native applications using specialized MCP servers. This demo illustrates a complete developer lifecycle within a "playground" environment, from initial service deployment to real-time debugging using Cloud Logging.

## Repository Structure
```
gcp-developer-playground/
├── apps/                        # Application source code
│   ├── frontend/                # Next.js app
│   └── backend/                 # Node.js API
├── infra/                       # Deployment manifests
│   ├── backend.yaml             # GKE config
│   └── db-secret.yaml           # Database credentials
└── GEMINI.md                    # Architecture document
```

## Getting Started
1. Configure your GCP project and region in `.env` files.
2. Build and push container images to GCR.
3. Deploy manifests to your GKE cluster.
