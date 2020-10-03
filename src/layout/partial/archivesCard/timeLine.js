import React from 'react';
import * as Yoshino from 'yoshino';
const { Timeline } = Yoshino;

export default class ArchiveTimeline extends React.Component {

    render() {
        return (
            <div style={{marginTop: '16px'}} >
                <Timeline>
                    <Timeline.Item time='2017年 4月 4日'>
                        <span>清明节</span>
                    </Timeline.Item>
                    <Timeline.Item time='2017年 5月 1日'>
                        <span>劳动节</span>
                    </Timeline.Item>
                    <Timeline.Item time='2017年 6月 1日'>
                        <span>儿童节</span>
                    </Timeline.Item>
                    <Timeline.Item time='2017年 8月 1日'>
                        <span>建军节</span>
                    </Timeline.Item>
                    <Timeline.Item time='2017年 10月 1日'>
                        <span>国庆节</span>
                    </Timeline.Item>
                    <Timeline.Item time='2017年 11月 11日'>
                        <span>光棍节</span>
                    </Timeline.Item>
                    <Timeline.Item>
                        <span>更多</span>
                    </Timeline.Item>
                </Timeline></div>
        )
    }
}