# Kubernetes Fundamentals for DevOps Engineers

Kubernetes (K8s) is the industry standard for container orchestration. Learn the fundamentals to manage containerized applications at scale.

## Core Components

- **Pod**: Smallest deployable unit
- **Service**: Network abstraction for pods
- **Deployment**: Manages pod replicas
- **ConfigMap**: Configuration data
- **Secret**: Sensitive data storage

## Basic Commands

```bash
# Get cluster info
kubectl cluster-info

# List all pods
kubectl get pods -A

# Deploy an application
kubectl apply -f deployment.yaml
```

## Example Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:latest
          ports:
            - containerPort: 80
```

Master these concepts to excel in cloud-native development!
