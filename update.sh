git rm -rf demo
git clone git@github.com:scottburch/river-demo.git demo


cd demo

git submodule init
git submodule update 

find . -name .git | xargs rm -rf
cd ..
git add demo
git commit -m 'updating gh-pages'
git push origin gh-pages
