
result=require('./assets/func')

    test('str',()=>{
        // str='<test>""\'\' &lt;</test>'
        str='test &lt;test&gt;</code>'
        // str='"test'
        expect(result(str)).toBe('test ')
        // expect(result(str)).toBe('test test')
    })