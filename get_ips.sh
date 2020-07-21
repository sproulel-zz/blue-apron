

if [ $# -eq 1 ]
then
	url=$1
else
	url=https://raw.githubusercontent.com/linuxacademy/content-elastic-log-samples/master/access.log
fi


curl $url | grep -Eo '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | sort | uniq > unique_ips.txt
