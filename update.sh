# remove old demo dir and redownload
git rm -rf demo
git clone git@github.com:scottburch/river-demo.git demo

# update submodules
cd demo
git submodule init
git submodule update 

# remove any signs that this is a git repository
find . -name .git | xargs rm -rf
find . -name .gitignore | xargs rm -rf
find . -name .gitmodules | xargs rm -rf

# commit new site
cd ..
git add demo
git commit -a -m 'updating gh-pages'
git push origin gh-pages
