const {test,expect} = require('@playwright/test')

test("MY First Test",async function({page}) {
    expect(12).toBe(12)
    
})

 test.skip("MY Second Test",async function({page}) {
    expect(100).toBe(1022)

 })

 test("MY Third Test",async function({page}) {
    expect('00.021').toBe('00.021')

 })

test("MY Fourth Test",async function({page}) { 
    expect("Neelkanta Desai").toContain ("Desai")
    expect(true).toBeTruthy
})

test("MY Five Test",async function({page}) { 
   
    expect(false).toBeFalsy()
})
test("MY Six Test",async function({page}) {
    expect("Neelkanta Desai".includes("Desai")).toBeFalsy()
}) 
test("MY Saven Test",async function({page}) {
    expect("Neelkanta Desai".includes("Desai")).toBeTruthy()
}) 