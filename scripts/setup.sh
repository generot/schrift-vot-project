docker build -t vot/schrift:latest ../

kubectl apply -f ../kuber/components.yaml
kubectl apply -f ../kuber/k8config.yaml