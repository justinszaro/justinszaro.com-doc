**Other Useful Commands** 

| git log origin/main \# Shows a list of commits, who committed them, and their commit message.   |
| :---- |

| git show origin/main \# Shows the log message and the text difference between your current branch and the specified branch |
| :---- |

| git reset \-hard origin/master \# Reverts back to the master branch and deletes changes |
| :---- |

| git branch \-d branch\_name \# Deletes a local branch |
| :---- |

| git push \-d origin branch\_name \# Deletes a remote branch |
| :---- |

| git switch \-c new\_branch \# Creates a new branch and switches to it (different from checkout?) |
| :---- |

**Forcing Push to a Remote**

* Why force push?  
  * Local version is preferable to the remote version (master/production is broken)  
  * Remote version went wrong and needs repair  
  * Versions have diverged and merging is undesirable  
  * Force push \= replacement   
* To perform a force push:

| git push \-f branchname |
| :---- |

| git push \-force branchname |
| :---- |

* Warning: This will undue the commits of fellow collaborators.  
  * Commits will disappear and collaborators will need to merge their changes with the new master, which can be incredibly frustrating.  
* Always let your collaborators know before doing a force push (will overwrite changes and history)

**Identify Merge Branches**

* Allows you to list branches thaat have been merged into a branch  
* Useful for knowing what features have been fully incorporated.   
* Useful for cleanup after merging multiple different features.   
* Uses the current branch as default.  
* Can specify a branch or a remote branch instead\!

| git branch \-merged \# List any branches that have been merged into master |
| :---- |

| git branch \-no-merged \# List any branches that have not been merged into master |
| :---- |

| git branch \-r \-merged \# List any remote branches that have not been merged |
| :---- |

**Pruning Stale Branches**

* Deletes all the stale branches  
  * Stale branch \- a remote-tracking branch that no longer tracks anything because the actual branch in the remote repository has been deleted.    
* Deleting a remote branch also deleted the remote-tracking branch too.  
* If someone else deleted a remote branch, your remote-tracking branch remains  
  * This requires you to prune the branch manually.  
* You can fetch and prune at the same time.   
* git prune is a different command, but it happens on its own.

| git remote prune origin \# Prunes the stale remote-tracking branches |
| :---- |

| git remote prune origin \-dry-run \# Displays which branches would be prunes if you were to run the command again |
| :---- |

**Creating and Deleting Tags**

* Tagging allows you to mark points in history as important.   
* It creates a named reference to a commit.   
* It is most frequently used to make software release versions (v1.0, v1.1, v2.0)  
* Can mark key features or changes (ecommerce, redesign)  
* Can mark points for discussions (bugs/issues)

| git tag tag\_name SHA(commit\_id) \#Adds a lightweight tag |
| :---- |

| git tag \-am "message" tag\_name SHA(commit\_id) \# Adds an annotated tag, which is the most common and allows you to include a message.   |
| :---- |

| git tag (-d / \-delete) tag\_name \# Deletes a tag  |
| :---- |

**List Tags:**

| git tag (-l / \-list) \# Return a list of all of your tags |
| :---- |

| git tag \-l "filter" \# Returns a list of strings that match the given filter. \* is the wildcard character |
| :---- |

| git tag \-n3 \# Return a list of tags with their annotations |
| :---- |

**Pushing Tags to Remote Repositories**

* Like branches, tags are local unless shared to a remote  
* git push will not transfer tags by default.   
* Tags must be explicitly transferred.  
* git fetch automatically retries shared tags

| git push origin tag\_name \# Push a tag up to the remote repository |
| :---- |

| git push origin \-tags \# Push all of your tags up to the related repository |
| :---- |

| git fetch \-tags \# Fetch only tags (with necessary commits) |
| :---- |

 

| git push \-d origin tag\_name \# Deletes a remote tag |
| :---- |

**Interactive Mode**

* Stage changes interactively.  
* Allows staging only portions of changed files  
* Helps to make smaller, more focused commits  
* Feature of many Git GUI tools

| git add (-t / \-interactive) \# Enter gits interactive mode |
| :---- |

**Patch Mode**

* Allows staging only portions of a changed file  
* “Hunk”: an area where two files differ  
* Hunks can be staged, skipped, or split into smaller hunks.  
* This is done in interactive mode.  
* Patch mode is also available from normal git add  
  * Patch mode can also be used for stash, reset, restore, and commit

| git add (-patch / \-p) \# Stage changes using patch mode |
| :---- |

**Split a Hunk**

* Hunks can contain multiple changes  
* Tell git to try to split a hunk further  
* There must be one or more unchanged lines between changes to split a hunk.

**Edit a Hunk**

* Hunks can be edited manually  
* Useful when a hunk cannot be split automatically  
* Edits are done using the Diff-style line prefixes: \+, \-, space  
* When editing, you need to make the final product look like an actual diff file. 

**Share Select Changes**

* Cherry picking commits applies the changes from one or more existing commits  
* Each commit targeted will become a new commit on the current branch  
* Conceptualy similar to copy and paste  
* New commits have different SHAs  
* You can cherry-pcik commits from any branch  
* You cannot cherry=pick a merge commit.   
* The \-e or –edit options will allow you to edit the commit message instead of accepting it as is.   
* Cherry Picking can cause conflicts

| git cherry-pick SHA (SHA..SHA) \# Cherry pick a commit or a range of commits to pull into your branch |
| :---- |

Diff Patches

* Share changes via files  
* USeful when changes are not ready for a public branch  
* Useful when collaborators do not share a remote  
* Discussion, review, approval processes.

| git diff from-commit to-commit \> output.diff \# Create a diff patch  |
| :---- |

Apply Diff Patches

* Applies changes in a diff patch file to the working directory  
* Makes changes but it does not commit them.  
* No commit history is transferred  
* Git apply does not return any information on what happened

| git apply output.diff \# Apply a diff patch to your current branch |
| :---- |

**Creating Formatted Patches**

* Export each commit in the Unix mailbox format  
* Useful for email distribution of changes  
* Includes the commit messages and some meta information.  
* \-o file\_path is a switch that will output the patch file to a certain directory  
* –stdout \> feature.patch will output the entire formatted patch to a single file.  
* The files will be numbered so that they are applied in the correct order. 

| git format-patch SHA..SHA \# Creates a formatted patch |
| :---- |

| git format-patch \-1 SHA \# Creates a formatted patch for a single commit |
| :---- |

**Apply Formatted Patches:**

* Extracts author, commit message, and changes from a mailbox message and apply them to the current branch  
* Similar to cherry-picking: same changes but with different SHAs

| git am directory/0001-some-name.patch \# Apply one patch file to the current branch. |
| :---- |

| git am directory/\*.patch \# Apply all of the patch files to the current branch |
| :---- |

**Rebase Commits**

* Take commits from a branch and replay them at another point, most often at the end of another branch  
* Useful to integrate recent commits without merging  
* Maintains a cleaner, more linear project history  
* Ensures topic branch commits apply cleanly  
* It moves the working-branch to the tip of the main branch.  
* The SHAs will change.   
* You can rebase onto other branches as well.   
* Rebasing commits may conflict with already existing code  
* Git pauses rebase before each conflicting commit  
* Very similar to resolving merge conflicts  
* –skip will skip that commit  
* –abort will abort the rebase all together

| git rebase main \# Rebase the current branch to tip of main |
| :---- |

| Git rebase \-onto newbase upstream branch \# Rebase onto another working branch  |
| :---- |

| git rebase —continue \# Continue the rebase after resolving the merge conflict |
| :---- |

| git merge-base main new\_feature \# Returns the commit where the topic branch diverges from the main branch |
| :---- |

Merging vs. Rebasing

* Both ways to incorporate changes from one branch into another branch  
* Similar ends but the means are totally different  
* Side effects are important to understand  
* Merging  
  * Adds a merge commit each time  
  * Nondesctructive  
  * Complete record of what happened and when  
  * Easier to undo  
  * Logs can become cluttered and nonlinear  
* Rebasing  
  * No additional merge ecommit  
  * Desctructive: SHA changes, commits are rewritten  
  * No longer a complete record of what happened when  
  * Trickeier to undo  
* DO NOT rebase on a public branch: will ruin collaborators work

Interactive Rebasing

* Rebasing does have an interactive mode  
* Allows you to modify commits as theu are being replayed  
* Opens the git-rebase-todo file for editing  
* Can reorder or skip commits  
* Can edit the commit contents   
* Can also allows you to edit the last few commits  
  * This is destructive, so it should only be used in local branches

| git rebase \-i main new\_feature \# Rebase in interactive mode |
| :---- |

| git rebase \-i HEAD\~3 \# Picks up the last three commit and begins interactive mode |
| :---- |

**Squash Commits:**

* Folds two or more commits into one  
* Squash will combine the change sets and concatenate the commit messages together.  
* Fixup does the same thing, but discards the entire commit message  
* Squash will use the first author in the commit series as the author  
* Squashing is a great way to clean up the commit history for a rebase or to keep the history clean  
* This is destructive, so be careful\!

| git rebase \-i HEAD\~3 \# Allows you to squash the last three commits in the rebase interactive mode |
| :---- |

Pull Rebase:

* You can also rebase a git pull.  
* Fetch from remote, then rebase instead of merging  
* Keeps the history cleaner by reducing the number of merge commits  
* Only use on local commits not shared to a remote

| git pull (-r / \--rebase) \# Pull using the rebase option |
| :---- |

| git pull \-rebase=preserve \# Pull and squash the newest commits, but keep any merge commits that were made.  |
| :---- |

**Log Options:**

* Log is the primary interface to Git  
* Log has many options  
* Log can sort, filter, and format output  
* Three very useful log commands

| git log filename.txt \# Will list a record of all the changes that have happened to that file |
| :---- |

| git log (-p/-patch) \# Lists the commits as patches, only showing the difference between files |
| :---- |

**Git Blame:**

* Browse annotated file.  
* Determine who changed lines in a file and why  
* Useful for probing the history behind a files contents  
* Useful for identifying which commit introduced a bug

| git blame filename \# Annotate file with commit details |
| :---- |

| git blame \-w filename \# \-w ignores whitespace |
| :---- |

| git blame \-L \#\#\#, \#\#\# filename \# Blame the file at the specified lines |
| :---- |

| git blame SHA filename \# Annotate the file at this commit  |
| :---- |

Bisect:

* Find the commit that introduced a bug or regression  
* Mark last good revision and first bad revision  
* Resets code to midpoint

git bisect start \# Starts the bisect session

git bisect good branchname/SHA \# Marks the good version of the code

git bisect bad branchname/SHA \# Marks the bad version of the code

git bisect reset \# Will end the session and reset your code back to its original version