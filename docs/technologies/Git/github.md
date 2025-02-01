---
id: Git + Github
tags:
  - git
  - github
---

| git clone URL | Clones a git repository and its history.  |
| :---- | :---- |
| git remote \-v | Lists the remotes and their names associated with the repository.  |
| git status | Tells you where HEAD is pointing. Will also list files in the working directory and the staging area. It also tracks your changes from the local main branch.  |
| git add | Moves the file from the working directory to the staging area.  |
| git commit  | Make a snapshot of the files in the staging area. |
| git diff | Tells you the difference between the working directory and the staging directory. |
| git log | Displays the history of the .git directory. |
| git pull | Updates the local branch with any changes that have been made on the remote branch of the same repository. |
| git push | Updates the remote branch with the staged changes. |
| git reset  –soft –hard | Reverts the branch to a previous specified state. Reverts the changes to the staging area. Destroys the changes.  |
| git rebase | Fast Forward Merge |
| git merge –no \-ff | Recursive Merge |
| git checkout \-b branchName | Creates a new branch and switches to it.  |
|  |  |

Github Glossary:

* Repository \- It is essentially a projects folder. It contains the project files and the file's revision history. It also allows for all of GitHub features.  
* Fork \- A personal copy of another person’s repository. You can freely make changes without affecting the original repository. You can submit a pull request to the original repo.   
* Collaborator \- A person with read and write access who has been invited to contribute by the repository owner.   
* Contributor \- Someone who has contributed to the project by having a pull request merged but does not have collaborator access.   
* Issue \- Suggested improvements, tasks, or bugs related to the repository. Can be created by anyone and is moderated by repository collaborators. It can be assigned to users and has a discussion forum.   
* Pull Request \- Proposed changes to a repository, submitted by users. Can be rejected or accepted by collaborators. Any user that has a pull request accepted becomes a contributor. Further commits can be made to it to adjust for code reviews and comments.  
* Markdown \- syntax that allows for formatting in the content. Can be included in commit messages, tags, issues, etc.   
* Wiki \- Web pages editable by contributors. Attaches to a repository to host documentation, guides, how to’s, etc. 

Creating a Repo:

* [www.gitignore.io](http://www.gitignore.io) is a great website that makes useful .gitignore files for your repo.

Github Concepts:

* A branch is a safe development environment that will not affect the main branch.   
* Committing is small and measurable changes to a branch.  
* Pull requests ask the repository users to pull the changes into master.  
* Commits can be made after a pull request is made.   
* A merge pulls the change into the main branch.  
* Git clone copies the repo and its history.  
* Git remote \-v is good with forks. Allows you to pull down changes from the original repository (upstream) and your fork (origin).  
* git status tells you where HEAD is pointing. It will tell you what is going on in your working directory and stage area. It also compares the tracking branch to the local main branch.   
* git add moves the file from the working directory to the staging area.  
* git commit makes a snapshot of the files in the staging area.   
* git diff tells you the difference between the working and staging area.   
* git log displays the history of the .git directory.\\  
* git pull updates the local branch with any changes that have been made on the remote branch of the same repository. (Combination of git fetch and git merge)  
* git push updates the remote repository.  
* git reset resets the branch back to a previous commit.   
  * \-–soft moves the changes back to the staging area.  
  * –hard destroys the changes.   
  * No keyword moves them back to the working stage.   
* Merge Strategies:  
  * Fast Forward Merge:  
    * History is a straight line  
    * No new commits on master to worry about.  
  * Recursive Merge:  
    * Master has had updates, so the merge combines both of them.   
* Organizations can have a set of repos, and teams can have certain access to them.   
* Github has integrations that handle deployment, monitoring, project management, and C.I.  
* Changing History  
  * Git revert is the safest change, because it makes a new commit instead of removing or renaming old ones. 

The Github Workflow:  
