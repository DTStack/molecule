export const data = [
    {
        id: '1',
        title: 'folder',
        name: 'folder',
        key: 'folder',
        type: 'folder',
        contextMenu: [
            {
                id: 'custom',
                name: 'Custom ContextMenu',
                onClick: () => { console.log("i'm custom contextMenu") }
            },
        ],
        children: [
            {
                id: '2',
                title: 'abccccccccc',
                name: 'abccccccccc',
                key: 'abccccccccc',
                type: 'folder',
                children: [
                    {
                        id: '3',
                        title: 'test.txt',
                        name: 'test.txt',
                        key: 'test.txt',
                        type: 'file',
                        icon: 'symbol-file',
                        value: `create table if not exists ods_order_header (
     order_header_id     string comment '订单头id'
    ,order_date          bigint comment '订单日期'
    ,shop_id             string comment '店铺id'
    ,customer_id         string comment '客户id'
    ,order_status        bigint comment '订单状态'
    ,pay_date            bigint comment '支付日期'

)comment '销售订单明细表'`
                    },
                    {
                        id: '4',
                        title: 'test.js',
                        name: 'test.js',
                        key: 'test.js',
                        type: 'file',
                        icon: 'file-binary',
                        value: `function mix(constructor) {
			/// <summary locid="15">
			/// Defines a class using the given constructor and the union of the set of instance members
			/// specified by all the mixin objects.  The mixin parameter list can be of variable length.
			/// </summary>
			/// <param name="constructor" locid="9">
			/// A constructor function that will be used to instantiate this class.
			/// </param>
			/// <returns locid="12">
			/// The newly defined class.
			/// </returns>
			constructor = constructor || function () { };
			var i, len;
			for (i = 0, len = arguments.length; i < len; i++) {
				initializeProperties(constructor.prototype, arguments[i]);
			}
			return constructor;
		}`
                    },
                    {
                        id: '5',
                        title: 'test.html',
                        name: 'test.html',
                        key: 'test.html',
                        type: 'file',
                        icon: 'file-code',
                        value: `<!DOCTYPE HTML>
<!--Example of comments in HTML-->
<html>
<head>
	<!--This is the head section-->
	<title>HTML Sample</title>
	<meta charset="utf-8">

	<!--This is the script tag-->
	<script type="text/javascript">
		function ButtonClick(){
			// Example of comments in JavaScript
			window.alert("I'm an alert sample!");
		}
	</script>
</head>
<body>
</body>
</html>
`
                    },
                ],
            },
            {
                id: '6',
                title: 'xyz',
                name: 'xyz',
                key: 'xyz',
                type: 'folder',
                children: [
                    {
                        id: '7',
                        title: 'test.pdf',
                        name: 'test.pdf',
                        key: 'test.pdf',
                        type: 'file',
                        icon: 'file-pdf',
                    },
                    {
                        id: '8',
                        title: 'test.media',
                        name: 'test.media',
                        key: 'test.media',
                        type: 'file',
                        icon: 'file-media',
                    },
                    {
                        id: '9',
                        title: 'test.zip',
                        name: 'test.zip',
                        key: 'test.zip',
                        type: 'file',
                        icon: 'file-zip',
                    },
                ],
            },
            {
                id: '10',
                title: 'file.yaml',
                name: 'file.yaml',
                key: 'file.yaml',
                type: 'file',
            },
        ],
    },
];
