# vi: set ft=ruby :

Vagrant.configure(2) do |config|
 
  #Image type Ubuntu 14.04 
  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder ".", "/vagrant"

  #port mappings
  config.vm.network "forwarded_port", guest: 80, host: 2000
  config.vm.network "forwarded_port", guest: 9000, host: 9000
  config.vm.network "forwarded_port", guest: 35729, host: 35729

config.vm.provider :virtualbox do |vb|
  vb.customize ["modifyvm", :id, "--memory", "1028"]
end

config.vm.provision :shell, :privileged => false, :path => "scripts/setup.sh"

end
