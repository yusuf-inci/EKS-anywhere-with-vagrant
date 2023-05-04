# Commands

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
- Create a Deployment with a declarative command
`kubectl apply -f hello-world-apply.yaml`
- Get the Deployments to ensure that a Deployment was created
`kubectl get deployments`
- List the Pods to ensure that three replicas exist
`kubectl get pods`
### Load balancing the application
- In order to access the application, we have to expose it to the internet using a Kubernetes Service
`kubectl expose deployment/hello-world`
- List Services in order to see that this service was created
`kubectl get services`
- Open a new terminal window and run the following command and keep it running
`kubectl proxy`
- In the original terminal window, ping the application to get a response
`curl -L localhost:8001/api/v1/<namespaces>/services/hello-world/proxy`
- Run the command which runs a for loop ten times creating 10 different pods and note names for each new pod
`for i in `seq 10`; do curl -L localhost:8001/api/v1/<namespaces>/services/hello-world/proxy; done`
- Delete the Deployment and Service. This can be done in a single command by using slashes
`kubectl delete deployment/hello-world service/hello-world`
- Return to the terminal window running the proxy command and kill it using Ctrl+C

## The kubectl CLI

| Command           | Description                                                           |
|-------------------|-----------------------------------------------------------------------|
| kubectl apply     | Apply a configuration to a resource.                                   |
| kubectl config    | get-clusters Displays clusters defined in the kubeconfig.              |
| get-contexts      | Displays the current context.                                          |
| kubectl create    | Create a resource.                                                     |
| kubectl delete    | Deletes resources.                                                     |
| kubectl describe  | Shows details of a resource or group of resources.                     |
| kubectl expose    | Expose a resource to the internet as a new Kubernetes service.          |
| kubectl get       | Displays resources.                                                     |
| kubectl get pods  | Lists all the Pods in the namespace.                                    |
| kubectl proxy     | Creates a proxy server between a localhost and the Kubernetes server.  |
| kubectl rollout   | Manage the rollout of a resource.                                       |
| kubectl run       | Creates and runs a particular image in a pod.                           |
| kubectl scale     | Set a new size for a deployment.                                        |
| kubectl set       | Configure application resources.                                       |
| kubectl version   | Prints the client and server version information.                      |
