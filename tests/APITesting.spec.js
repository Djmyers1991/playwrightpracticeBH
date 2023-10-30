import {test, expect} from '@playwright/test'

test('APITest', async({request}) => {
    const response = await request.get('https://reqres.in/api/users/2')
    expect(response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('Weaver')

    console.log(await response.json())

})

test('PostTest', async({request})=>{
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            
                "name": "daniel",
                "job": "badass"
            
        }
    })

    expect(response.status()).toBe(201)

    const text = await response.text()
    expect(text).toContain('daniel')
    expect(text).toContain('badass')

    console.log(await response.json())

})

test('PutTest', async({request})=>{
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            
                "name": "daniel",
                "job": "badass"
            
        }
    })

    expect(response.status()).toBe(200)

    const text = await response.text()
    expect(text).toContain('daniel')
    expect(text).toContain('badass')

    console.log(await response.json())

})

test('DeleteTest', async({request}) => {
    const response = await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)




})