# It's going to ask for password (you should know it)
#ssh feminindex@ftp.ecofeminita.com  &&
#cd feminindex.com

ssh_pass=IARmIlAtIONk 
# echo $ssh_pass

echo "Building files"
npm run build
echo "Cleaning folder..."
sshpass -p $ssh_pass ssh feminindex@ftp.ecofeminita.com "cd feminindex.com ; rm -rf public ; mkdir public"
echo "Uploading files..."
sshpass -p $ssh_pass scp -r ./out/* feminindex@ftp.ecofeminita.com:/home/feminindex/feminindex.com/public
