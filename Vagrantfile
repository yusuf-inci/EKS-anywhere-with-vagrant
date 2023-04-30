Vagrant.configure("2") do |config|

  # Enable and configure hostmanager plugin
  config.hostmanager.enabled = true 
  config.hostmanager.manage_host = true

  # Sanal makinelerin özellikleri
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
  end

  # İlk sanal makine - kontrol düğümü
  config.vm.define "control" do |control|
    control.vm.box = "ubuntu/focal64"
    control.vm.network "private_network", ip: "192.168.50.10"
    control.vm.provision "shell", inline: <<-SHELL
      # Amazon EKS Anywhere için gerekli bağımlılıkların yüklenmesi

      lsmod | grep br_netfilter
      sudo modprobe br_netfilter
      lsmod | grep br_netfilter
      cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
      net.bridge.bridge-nf-call-ip6tables = 1
      net.bridge.bridge-nf-call-iptables = 1
      EOF
      sudo sysctl --system
      cat <<EOF | sudo tee /etc/sysctl.d/99-kubernetes-cri.     conf
      net.bridge.bridge-nf-call-iptables  = 1
      net.bridge.bridge-nf-call-ip6tables = 1
      EOF
      sudo sysctl --system
                                                                  
      sudo apt-get update && sudo apt-get install -y \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common \
        git

      # Docker'ın yüklenmesi
      curl -fsSL https://get.docker.com -o get-docker.sh
      sudo sh get-docker.sh

      # Kubernetes'ın yüklenmesi
      curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
      echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
      sudo apt-get update
      sudo apt-get install -y kubectl

      # Amazon EKS Anywhere CLI'nın yüklenmesi
      curl -L https://github.com/aws/eks-anywhere/releases/latest/download/eksctl-anywhere-linux-amd64.tar.gz | tar xz
      sudo mv eksctl-anywhere /usr/local/bin/eksctl-anywhere
    SHELL
  end

  # İkinci sanal makine - işçi düğümü
  config.vm.define "worker" do |worker|
    worker.vm.box = "ubuntu/bionic64"
    worker.vm.network "private_network", ip: "192.168.50.11"
    worker.vm.provision "shell", inline: <<-SHELL

      lsmod | grep br_netfilter
      sudo modprobe br_netfilter
      lsmod | grep br_netfilter
      cat <<EOF | sudo tee /etc/sysctl.d/k8s.conf
      net.bridge.bridge-nf-call-ip6tables = 1
      net.bridge.bridge-nf-call-iptables = 1
      EOF
      sudo sysctl --system
      cat <<EOF | sudo tee /etc/sysctl.d/
      99-kubernetes-cri.     conf
      net.bridge.bridge-nf-call-iptables  = 1
      net.bridge.bridge-nf-call-ip6tables = 1
      EOF
      sudo sysctl --system

      # Amazon EKS Anywhere için gerekli bağımlılıkların yüklenmesi
      sudo apt-get update && sudo apt-get install -y \
        apt-transport-https \
        ca-certificates \
        curl \
        gnupg-agent \
        software-properties-common \
        git

      # Docker'ın yüklenmesi
      curl -fsSL https://get.docker.com -o get-docker.sh
      sudo sh get-docker.sh

      # Kubernetes'ın yüklenmesi
      curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
      echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
      sudo apt-get update
      sudo apt-get install -y kubectl
    SHELL
  end
end
