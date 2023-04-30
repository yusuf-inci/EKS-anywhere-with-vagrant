Vagrant.configure("2") do |config|

  # Enable and configure hostmanager plugin
  config.hostmanager.enabled = true 
  config.hostmanager.manage_host = true

  # Sanal makinelerin özellikleri
  config.vm.provider "virtualbox" do |vb|
    vb.memory = "2048"
    vb.cpus = 2
  end
end
