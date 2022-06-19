# On the constructing of personal sites.

_June 16, 2022 by [Ricky](/)_

Making a website is a lot of work!

First, do we use fancy dynamic sites such as wordpress which provide super easy editing and endless plugins.
Or do we just have a bunch of static code we have to create using more technical means.

For this site I decided to save money and go with the static content route.  
With Javascript being as powerful as it is, I can do anything I want with just a static site.

Now we need to host the site, luckily static content can be thrown into an S3 bucket, and if we want HTTPS all we have to do is point cloudfront to the bucket and tell it we want to use HTTPS only.

Once all the infrastructure is out of the way, we need to build the site.  
Since this is a static site, we should use html / js and just create a simple SPA.

The [MUI](https://mui.com/) framework provides a nice [Template](https://mui.com/material-ui/getting-started/templates/) for a blogging site that can be repurposed and fixed up to suite our needs, which is what we have here.
Though I also have a love of WebGL and had quite a fun time getting threejs and react working on my last version of this site [Old Site](https://www.serdalis.com/oldsite/index.html).

Unfortunately threejs moves like lightning and most of my old code is no longer usable, oh well we'll just do the basics.