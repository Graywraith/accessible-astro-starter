---
title: Passing Arrays to Components
author: Richard Noake
description: "Issues passing an array into a component"
pubDate: "May 05 2023"
image: "astro.svg"
badge: "Development"
has_link: false
custom_link_label: ""
custom_link: ""
tags: ["Astro","Development","Presentation"]
---


### Investigating How to pass an array of values into an Astro component

---

The process of passing an **array** of values arround in Astro seemed as though it should be really straight forward, but!

Well I tried passing it as an array <code>val[]</code>, no luck an error with the format of the argument. So just pass <code>val</code> and recieve it as an array? Still no luck.

When I did finally get the values I needed passed to the component I got the 'map is not a function' error.

Finally by passing the values I needed as an array as a comma separated string and the using code below in the code fence I got it to work :)

<code>
if (typeof tags !== 'undefined') {
  var tagsarr = tags.split(',');
  console.log(tagsarr);
}
</code>

And so move on...
