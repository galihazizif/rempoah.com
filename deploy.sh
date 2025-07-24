rsync -avz /home/azizi/localmerapi/website/wp-content/uploads/wp2static-processed-site/ /home/azizi/rempoah.com/ &&
git add . &&
git commit -m "deploy" &&
git push origin master

