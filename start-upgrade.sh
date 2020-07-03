#!/bin/sh

version_seven="7.9.*"
version_eight_one_two="8.1.*|8.2.*"
version_eight_three="8.3.*"
unsupported_plugins=

#gettign regex pattern
if [[ $1 =~ $version_eight_three ]]
then
	echo "Setting regex pattern for version 8.3 unsopported plugins..." 
	unsupported_plugins="sonar-auth-github-(.*),sonar-auth-gitlab-(.*),sonar-ldap-(.*),sonar-auth-saml-(.*),sonar-cnes-(.*),sonar-ha-(.*),sonar-branch-(.*),sonar-developer-(.*),sonar-license-(.*),sonar-python-(.*)"
elif [[ $1 =~ $version_eight_one_two ]]
then
	echo "Setting regex pattern for version 8.1 and 8.2 unspported plugins..."
	unsupported_plugins="sonar-auth-github-(.*),sonar-auth-gitlab-(.*),sonar-ldap-(.*),sonar-auth-saml-(.*),sonar-ha-(.*),sonar-branch-(.*),sonar-developer-(.*),sonar-license-(.*),sonar-python-(.*)"
elif [[ $1 =~ $version_seven ]]
then
	echo "Setting regex pattern for version 7.9 unsupported plugins..."
        unsupported_plugins="sonar-ha-(.*),sonar-branch-(.*),sonar-developer-(.*),sonar-license-(.*),sonar-python-(.*)"
else
	echo "Couldnt recognize image version."
fi

echo $unsupported_plugins
#running the playbook with sonar image version number
ansible-playbook playbook.yml --extra-vars "sonar_version=$1 regex_patern=$unsupported_plugins"
