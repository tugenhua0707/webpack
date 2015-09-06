/* 内容区模块代码 */
var ContentMode = React.createClass({
        render: function(){
            return (
                <div className="ContentMode">
					<div class="contents">{this.props.contents}</div>
                    {this.props.children}
                </div>
            )
        }
});
/* 页面div封装 上面三个模块 */
var Page = React.createClass({
    render: function(){
        return (
            <div className="homepage">
                <ContentMode  contents ="longen">this is one comment</ContentMode >
                <ContentMode  contents ="longen2">this is two comment</ContentMode >
            </div>
            )
        }
});
/* 初始化到content容器内 */
React.render(
    React.createElement(Page,null),document.getElementById("content")
);