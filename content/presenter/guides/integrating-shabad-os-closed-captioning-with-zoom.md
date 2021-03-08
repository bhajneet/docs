---
title: Integrating Shabad OS closed captioning with Zoom
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import zoomSettingsClosedCaptioning from '@site/static/img/zoom-settings-closed-captioning.png'
import zoomMeetingControlsClosedCaption from '@site/static/img/zoom-meeting-controls-closed-caption.png'

<p class="lead">As a meeting host, you can add closed captions to Zoom meetings by providing Shabad OS Presenter with the the caption URL.</p>

## Enabling closed captioning in the Zoom web portal

[See the official Zoom article about closed captioning >](https://support.zoom.us/hc/en-us/articles/207279736)

Closed captions can be provided by the host of a Zoom meeting. Before beginning the Zoom meeting, the host should enable closed captions from the online Zoom web portal.

1. In the navigation panel on the left, click [**Settings**](https://zoom.us/profile/setting).
2. In the meeting tab, enable **Closed captioning**.

<img src={zoomSettingsClosedCaptioning} width={500} />

## Starting closed captioning in a Zoom meeting

1. In a Zoom meeting that you are hosting, move your mouse in the Zoom window to display the **in-meeting controls**.
2. At the bottom of the meeting, click **Closed Caption** in the meeting controls.
3. Under "Use a 3rd party CC service", click the **Copy the API token** button.

<img src={zoomMeetingControlsClosedCaption} width={500} />

## Sharing the Zoom API token with Shabad OS

1. In the Shabad OS controller, click the cog/gear to open the **Settings** window.
2. Select **#TK** in the left pane.
3. Where it says **Zoom API Token**, paste the URL from Zoom.

## Teaching participants to view closed captioning

<Tabs
defaultValue="winmac"
values={[
{label: 'Windows / macOS', value: 'winmac'},
{label: 'Android / iOS', value: 'andios'},
]}>
<TabItem value="winmac">

1. After joining a meeting, you will see a notification in the meeting controls above **Closed Caption**.
2. Click **Closed Caption** to start viewing closed captioning.

:::note
The subtitles can be moved by clicking and dragging them in the meeting window. The caption size can also be adjusted in Video Settings > Accessibility.
:::

</TabItem>
<TabItem value="andios">

1. Tap the **Settings** icon (cog/gear).
2. Tap **Meeting**, then enable **Closed Captioning**.

</TabItem>
</Tabs>

## Troubleshooting

If you cannot find **Closed Caption** in the in-meeting controls, make sure you checked the **More** (...) menu. [Read more about in-meeting controls >](https://support.zoom.us/hc/en-us/articles/201362603)
