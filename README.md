# blue-apron



## for ci/cd next steps

- kube deployment files to helm chart
- jenkins pipeline stage one run tests
	- write tests
- jenkins builds dockerfile
- jenkins updates helm chart with new docker image
- jenkins updates env to test helm chart
- jenkins reverts changes
- if passed:
	- jenkins updates helm chart repo with new helm chart
- if failed:
	- don't push to repo, and email person who made commit
- if main branch:
	- take to dev env
- if all others:
	- end pipeline
