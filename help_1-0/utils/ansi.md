---
toc: Miscellaneous
summary: Ansi colors.
aliases:
- color
- colors
- fansi
---
# Ansi Color
You create a color in Ares using either %x or %c followed by the color code.  %xn goes back to normal.  

For example: %xgGreen%xn makes [32mGreen[0m.  

Ares supports the standard Penn/Tiny color codes (g, b, c, etc.) as well as extended codes for FANSI support (http://www.fansi.org).  FANSI allows 256 colors, but it its not supported on all clients.  If your client does not support FANSI codes, you can turn off those colors.

`fansi <on or off>` - Turns extended FANSI colors on or off.

The 'colors' command will show you all available colors.

`colors` - View all color codes as they appear in your client.

Ansi codes can be nested within each other.

  %xrRed on black%xBRed on Blue%xnBack to normal
  [31mRed on black[44mRed on Blue[0mBack to normal

And codes like bold and underline can be stacked with other colors.

  %xh%xbHighlighted blue.%xn
  [1m[34mHighlighted blue.[0m

Additional ansi codes include:

    %x! - A random color
    %xu - Start underline
    %xU - End underline (but doesn't end any colors)
    %xi - Inverse colors
    %xI - End inverse
    %xh - Highlight color (bold)
    %xH - End bold (but doesn't end any colors)