commit 65763c68ca80ee3aaa8453b836b2579a839f0b8f
Author: copilot-swe-agent[bot] <198982749+Copilot@users.noreply.github.com>
Date:   Tue Sep 23 13:05:35 2025 +0000

    fix: update remaining hardcoded ui5.github.io URLs
    
    - Update logo source in docusaurus.config.ts to be dynamic
    - Update version navbar component to use dynamic URLs via useDocusaurusContext
    - Fix PR template links to use relative repository paths
    - All website components now adapt to fork deployments
    
    Co-authored-by: dobrinyonkov <22766569+dobrinyonkov@users.noreply.github.com>
