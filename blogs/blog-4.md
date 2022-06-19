# Campaign Monitor
My second job threw me into the world of web applications. When I first started I barely knew the difference between a GET and POST request, I didn't know how browsers worked and had little idea how web applications spoke to the internet.

I started at CM's Security team and was thrown into scanning the current state of the application for basic vulnerabilities such as CSRF, XSS, RCE and incorrectly set cookies.  
Once I perfected my knowledge of these issues I was then tasked with implementing an [AI driven asynchronous system](https://sift.com/) to curb the issue of phishing campaigns being sent from new and old accounts.  
A lot of research into how the AI model and tagging system was needed but the solution was finally implemented to great effect, dropping phishing campaigns by 80%.

While doing this work I also partially rewrote the application deployment pipeline a couple of times and completely overhauled the internal tooling service to bring it up to modern specifications and include permissions.

As the security team gained more scope I was put in charge of operating the [bug bounty](https://www.bugcrowd.com/) program, interacting with researchers, validating findings, prioritising and assigning the issues to the engineering teams.  
At the same time I was tasked with creating educational material and presenting it to the engineers to increase their knowledge of security issues, how they are exploited, how to detect them and how to mitigate them.

As the application level vulnerabilities were addressed we moved on to implementing and managing a [WAF](https://www.signalsciences.com/) and implementing a [log aggregator and alerting system](https://www.splunk.com/) to monitor for intrusion, deviant behaviour and malicious users.

With all these systems now in place we started perfecting our incident response process, which requires meticulous logging, documentation, the ability to collaborate with any team quickly and efficiently to discover, quantify and mitigate the issue.  
This is overall a difficult problem, which we haven't fully solved.