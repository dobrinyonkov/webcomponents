commit 4b39ca3bcad80606e3cce7c9cf081bac0419ba30
Author: Copilot <198982749+Copilot@users.noreply.github.com>
Date:   Thu Sep 25 21:06:36 2025 +0300

    fix: make GitHub Pages URLs dynamic for fork deployments (#10)
    
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
