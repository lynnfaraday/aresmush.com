---
title: Tags
description:
layout: page
---
  
<ul class="tags-box inline">
{{# _root.tags.all }}
<li><a href="#{{name}}">{{ name }}(<span>{{ count }}</span>)</a></li>
{{/ _root.tags.all }}
</ul>

{{# _root.tags.all }}
<a name="{{ name }}"></a>

<h3>{{name}}</h3>
<ul>
{{# _root?to__root }}
  <li><a href="{{ url }}">{{ title }}</a></li>
{{/ _root?to__root }}
</ul>
{{/ _root.tags.all }}


