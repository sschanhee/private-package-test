# Get the current branch name
branch_name=$(git branch | grep "*" | sed "s/\* //")

# Get the name of the branch that was just merged
reflog_message=$(git reflog -1)
merged_branch_name=$(echo $reflog_message | cut -d" " -f 4 | sed "s/://")
# Get current tag of branch in promised format
current_branch_tag=$(git describe --exact-match --tags 2> /dev/null || git rev-parse --short HEAD | grep -E "^v[[:digit:]]{1,5}\.[[:digit:]]{1,5}$")

# if [[ $merged_branch_name != "main" || $current_branch_tag]]; then
#     exit 0;
# fi

latest_tag=$(git tag -l --sort=-v:refname | head -n 1)
tag_num=$(tr 'v' $'\n' <<< $latest_tag | tail -n 1)
major=$(tr '.' $'\n' <<< $tag_num | head -n 1)
minor=$(tr '.' $'\n' <<< $tag_num | tail -n 1)
echo $major
echo $minor
git tag -a v$major.$(($minor + 1)) -m "my version 2.0"