commit 89eac9d5fad820b11b2f520e8d95c2c5aaadf121
Author: Copilot <198982749+Copilot@users.noreply.github.com>
Date:   Thu Sep 25 21:07:09 2025 +0300

    feat: add automatic PR deployments for website development (#9)
    
    * Initial plan
    
    * feat: add PR deployment support for website
    
    - Modify docusaurus.config.ts to support PR deployments with branch-based URLs
    - Add new deploy-website-on-pr.yaml workflow that triggers on PR events
    - Add cleanup-pr-deployment.yaml workflow to remove deployments when PRs close
    - Add ci:deploy:pr build scripts to root and website packages
    - PR deployments will be available at /webcomponents/pr-{branch-name}/
    
    Co-authored-by: dobrinyonkov <22766569+dobrinyonkov@users.noreply.github.com>
    
    * docs: update website README with PR deployment info
    
    - Document automatic PR deployments feature
    - Explain how the new workflow provides preview URLs
    - Add information about cleanup process
    - Include context about other deployment types
    
    Co-authored-by: dobrinyonkov <22766569+dobrinyonkov@users.noreply.github.com>
    
    * fix: make GitHub Pages URLs dynamic for fork deployments (#10)
    
    * Initial plan
    
    * fix: make GitHub Pages URLs dynamic for forks
    
    - Update docusaurus.config.ts to use GITHUB_REPOSITORY env var
    - Update deploy workflow to use dynamic repository owner
    - Update PR template to use relative documentation path
    - Enables proper deployment on forks like dobrinyonkov.github.io
    
    Co-authored-by: dobrinyonkov <22766569+dobrinyonkov@users.noreply.github.com>
    
    * fix: update remaining hardcoded ui5.github.io URLs
    
    - Update logo source in docusaurus.config.ts to be dynamic
    - Update version navbar component to use dynamic URLs via useDocusaurusContext
    - Fix PR template links to use relative repository paths
    - All website components now adapt to fork deployments
    
    Co-authored-by: dobrinyonkov <22766569+dobrinyonkov@users.noreply.github.com>
    
    ---------
    
    Co-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>
    Co-authored-by: dobrinyonkov <22766569+dobrinyonkov@users.noreply.github.com>
    
    ---------
    
    Co-authored-by: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>
    Co-authored-by: dobrinyonkov <22766569+dobrinyonkov@users.noreply.github.com>
