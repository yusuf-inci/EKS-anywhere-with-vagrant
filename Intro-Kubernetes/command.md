# Command

- Get cluster information
`kubectl config get-clusters`
- View current context
`kubectl config get-contexts`
- List all the Pods in default namespace
`kubectl get pods`
- Run the hello-world image as a container in Kubernetes
`kubectl run hello-world --image docker.io/90041/myimage:v1`
- use to see the output to get more details about the resource
`kubectl get pods -o wide`
- Describe the Pod to get more details about it
`kubectl describe pod hello-world`
- Delete the Pod
`kubectl delete pod hello-world`
- Imperatively create a Pod using the provided configuration file
`kubectl create -f hello-world-create.yaml`
- Delete the Pod
`kubectl delete pod hello-world`
- 