#!/bin/bash

set -e

MY_BLUE='\033[0;36m'
MY_RED='\033[0;31m'
MY_GREEN='\033[0;32m'
MY_NORMAL='\033[0m'

say() {
    echo -e "=>$MY_GREEN $1$MY_NORMAL"
}


say "=> Start script"
say "=> Update apt-get"
sudo apt-get update
say "=> Install dependencies"
sudo apt-get -y install build-essential libssl-dev git git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties libgdbm-dev libncurses5-dev automake libtool bison libffi-dev

say "Run creationix NVM installer script"
#cd /vagrant
/vagrant/scripts/creationix-nvm-install.sh

say "Setting up paths"
export PATH="$PATH:$HOME/.rvm/bin"
export NVM_DIR="$HOME/.nvm"
echo "$NVM_DIR/nvm.sh"
. "$NVM_DIR/nvm.sh"

say "Installing latest 0.12 version of node then set it as the default"
nvm install 0.12
nvm alias default 0.12

say "Installing Mobilefe/Tabletfe default global npm packages"
npm install -g yo
npm install -g grunt-cli bower grunt-ng-constant grunt-aws-s3

say "Creating a symbolic link in /usr/local/bin/ for node"
sudo ln -s $(which node) /usr/local/bin/node


gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable --ruby
source ~/.rvm/scripts/rvm
echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc

rvm install 2.1.2
rvm use 2.1.2 --default
gem install compass
