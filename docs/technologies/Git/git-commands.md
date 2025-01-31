# Other Useful Commands

## git log
- Shows a list of commits, who committed them, and their commit message.
- Usage: `git log origin/main`

## git show
- Shows the log message and the text difference between your current branch and the specified branch.
- Usage: `git show origin/main`

## git reset
- Reverts back to the master branch and deletes changes.
- Usage: `git reset -hard origin/master`

## git branch
- Deletes a local branch.
- Usage: `git branch -d branch_name`

## git push
- Deletes a remote branch.
- Usage: `git push -d origin branch_name`

## git switch
- Creates a new branch and switches to it (different from checkout?).
- Usage: `git switch -c new_branch`

## Forcing Push to a Remote
- To perform a force push:
  - Usage: `git push -f branchname` or `git push -force branchname`
- Warning: This will undue the commits of fellow collaborators.
- Always let your collaborators know before doing a force push (will overwrite changes and history).

## Identify Merge Branches
- Allows you to list branches that have been merged into a branch.
- Useful for knowing what features have been fully incorporated.
- Useful for cleanup after merging multiple different features.
- Uses the current branch as default.
- Can specify a branch or a remote branch instead.
- Usage:
  - `git branch -merged` - List any branches that have been merged into master.
  - `git branch -no-merged` - List any branches that have not been merged into master.
  - `git branch -r -merged` - List any remote branches that have not been merged.

## Pruning Stale Branches
- Deletes all the stale branches.
- Stale branch - a remote-tracking branch that no longer tracks anything because the actual branch in the remote repository has been deleted.
- Deleting a remote branch also deleted the remote-tracking branch too.
- If someone else deleted a remote branch, your remote-tracking branch remains.
- This requires you to prune the branch manually.
- You can fetch and prune at the same time.
- Usage:
  - `git remote prune origin` - Prunes the stale remote-tracking branches.
  - `git remote prune origin -dry-run` - Displays which branches would be pruned if you were to run the command again.

## Creating and Deleting Tags
- Tagging allows you to mark points in history as important.
- It creates a named reference to a commit.
- It is most frequently used to make software release versions (v1.0, v1.1, v2.0).
- Can mark key features or changes (ecommerce, redesign).
- Can mark points for discussions (bugs/issues).
- Usage:
  - `git tag tag_name SHA(commit_id)` - Adds a lightweight tag.
  - `git tag -am "message" tag_name SHA(commit_id)` - Adds an annotated tag, which is the most common and allows you to include a message.
  - `git tag (-d / -delete) tag_name` - Deletes a tag.
  - `git tag (-l / -list)` - Return a list of all of your tags.
  - `git tag -l "filter"` - Returns a list of strings that match the given filter. * is the wildcard character.
  - `git tag -n3` - Return a list of tags with their annotations.
  - `git push origin tag_name` - Push a tag up to the remote repository.
  - `git push origin -tags` - Push all of your tags up to the related repository.
  - `git fetch -tags` - Fetch only tags (with necessary commits).
  - `git push -d origin tag_name` - Deletes a remote tag.

## Interactive Mode
- Stage changes interactively.
- Allows staging only portions of changed files.
- Helps to make smaller, more focused commits.
- Feature of many Git GUI tools.
- Usage: `git add (-t / -interactive)`

## Patch Mode
- Allows staging only portions of a changed file.
- “Hunk”: an area where two files differ.
- Hunks can be staged, skipped, or split into smaller hunks.
- This is done in interactive mode.
- Patch mode is also available from normal git add.
- Patch mode can also be used for stash, reset, restore, and commit.
- Usage: `git add (-patch / -p)`

## Split a Hunk
- Hunks can contain multiple changes.
- Tell git to try to split a hunk further.
- There must be one or more unchanged lines between changes to split a hunk.

## Edit a Hunk
- Hunks can be edited manually.
- Useful when a hunk cannot be split automatically.
- Edits are done using the Diff-style line prefixes: +, -, space.
- When editing, you need to make the final product look like an actual diff file.

## Share Select Changes
- Cherry picking commits applies the changes from one or more existing commits.
- Each commit targeted will become a new commit on the current branch.
- Conceptually similar to copy and paste.
- New commits have different SHAs.
- You can cherry-pick commits from any branch.
- You cannot cherry-pick a merge commit.
- The -e or –edit options will allow you to edit the commit message instead of accepting it as is.
- Cherry Picking can cause conflicts.
- Usage: `git cherry-pick SHA (SHA..SHA)`.

## Diff Patches
- Share changes via files.
- Useful when changes are not ready for a public branch.
- Useful when collaborators do not share a remote.
- Discussion, review, approval processes.
- Usage: `git diff from-commit to-commit > output.diff`.

## Apply Diff Patches
- Applies changes in a diff patch file to the working directory.
- Makes changes but it does not commit them.
- No commit history is transferred.
- Git apply does not return any information on what happened.
- Usage: `git apply output.diff`.

## Creating Formatted Patches
- Export each commit in the Unix mailbox format.
- Useful for email distribution of changes.
- Includes the commit messages and some meta information.
- -o file_path is a switch that will output the patch file to a certain directory.
- –stdout > feature.patch will output the entire formatted patch to a single file.
- The files will be numbered so that they are applied in the correct order.
- Usage: `git format-patch SHA..SHA` or `git format-patch -1 SHA`.

## Apply Formatted Patches
- Extracts author, commit message, and changes from a mailbox message and apply them to the current branch.
- Similar to cherry-picking: same changes but with different SHAs.
- Usage: `git am directory/0001-some-name.patch` or `git am directory/*.patch`.

## Rebase Commits
- Take commits from a branch and replay them at another point, most often at the end of another branch.
- Useful to integrate recent commits without merging.
- Maintains a cleaner, more linear project history.
- Ensures topic branch commits apply cleanly.
- It moves the working-branch to the tip of the main branch.
- The SHAs will change.
- You can rebase onto other branches as well.
- Rebasing commits may conflict with already existing code.
- Git pauses rebase before each conflicting commit.
- Very similar to resolving merge conflicts.
- –skip will skip that commit.
- –abort will abort the rebase altogether.
- Usage: `git rebase main` or `git rebase -onto newbase upstream branch`.

## Merging vs. Rebasing
- Both ways to incorporate changes from one branch into another branch.
- Similar ends but the means are totally different.
- Side effects are important to understand.
- Merging:
  - Adds a merge commit each time.
  - Nondesctructive.
  - Complete record of what happened and when.
  - Easier to undo.
  - Logs can become cluttered and nonlinear.
- Rebasing:
  - No additional merge commit.
  - Destructive: SHA changes, commits are rewritten.
  - No longer a complete record of what happened when.
  - Trickier to undo.
  - DO NOT rebase on a public branch: will ruin collaborators work.

## Interactive Rebasing
- Rebasing does have an interactive mode.
- Allows you to modify commits as they are being replayed.
- Opens the git-rebase-todo file for editing.
- Can reorder or skip commits.
- Can edit the commit contents.
- Can also allows you to edit the last few commits.
- This is destructive, so it should only be used in local branches.
- Usage: `git rebase -i main new_feature` or `git rebase -i HEAD~3`.

## Squash Commits
- Folds two or more commits into one.
- Squash will combine the change sets and concatenate the commit messages together.
- Fixup does the same thing, but discards the entire commit message.
- Squash will use the first author in the commit series as the author.
- Squashing is a great way to clean up the commit history for a rebase or to keep the history clean.
- This is destructive, so be careful!
- Usage: `git rebase -i HEAD~3` (allows you to squash the last three commits in the rebase interactive mode).

## Pull Rebase
- You can also rebase a git pull.
- Fetch from remote, then rebase instead of merging.
- Keeps the history cleaner by reducing the number of merge commits.
- Only use on local commits not shared to a remote.
- Usage: `git pull (-r / --rebase)` or `git pull -rebase=preserve`.

## Log Options
- Log is the primary interface to Git.
- Log has many options.
- Log can sort, filter, and format output.
- Three very useful log commands:
  - `git log filename.txt` - Will list a record of all the changes that have happened to that file.
  - `git log (-p/-patch)` - Lists the commits as patches, only showing the difference between files.
  - Git Blame:
    - Browse annotated file.
    - Determine who changed lines in a file and why.
    - Useful for probing the history behind a files contents.
    - Useful for identifying which commit introduced a bug.
    - Usage:
      - `git blame filename` - Annotate file with commit details.
      - `git blame -w filename` - -w ignores whitespace.
      - `git blame -L ###, ### filename` - Blame the file at the specified lines.
      - `git blame SHA filename` - Annotate the file at this commit.

## Bisect
- Find the commit that introduced a bug or regression.
- Mark last good revision and first bad revision.
- Resets code to midpoint.
- Usage:
  - `git bisect start` - Starts the bisect session.
  - `git bisect good branchname/SHA` - Marks the good version of the code.
  - `git bisect bad branchname/SHA` - Marks the bad version of the code.
  - `git bisect reset` - Will end the session and reset your code back to its original version.
