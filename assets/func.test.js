
result=require('./func')

    test('str',()=>{
        str='<test>aba</test>'
        expect(result(str)).toBe('aba')
    })