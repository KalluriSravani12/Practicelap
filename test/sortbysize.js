// Includes
const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');
const should = require('chai').should();
const expect = require('chai').expect;


/*
   I want to search for a product
   and view list of products in
    sorted by price.
*/
              describe.only('Sort by Price', () => {
                // Test case:
                    context('Searched category is displayed', () => {
                        it('I see the selected product in sorted order', async () => {
                            // Start web browser
                            const driver = await new Builder().forBrowser('firefox').build();
                            try{

                                await driver.get('https://magento.softwaretestingboard.com/');
                                 // Get the search input
                await driver.wait(until.elementLocated(By.css('#search')), 1000);
                await driver.findElement(By.id('search')).sendKeys('shirt', Key.RETURN);

                await driver.wait(until.elementLocated(By.css('a[href$="/radiant-tee.html"]')),10000);
                await driver.findElement(By.css('a[href$="/radiant-tee.html"]')).click();
                await driver.sleep(10000);
                await driver.wait(until.elementLocated(By.id('option-label-size-143-item-166')),10000);
                let gettingSize = await driver.findElement(By.id('option-label-size-143-item-166')).click();
                //let sizeget = gettingSize.getText();
                await driver.sleep(5000);
                await driver.wait(until.elementLocated(By.id('option-label-size-143-item-167')),10000);
                let gettingSize1 = await driver.findElement(By.id('option-label-size-143-item-167')).click();
                await driver.sleep(5000);
                await driver.wait(until.elementLocated(By.id('option-label-size-143-item-168')),10000);
                let gettingSize2 = await driver.findElement(By.id('option-label-size-143-item-168')).click();
                await driver.sleep(5000);
                await driver.wait(until.elementLocated(By.id('option-label-size-143-item-169')),10000);
                let gettingSize3 = await driver.findElement(By.id('option-label-size-143-item-169')).click();
                
                await driver.sleep(5000);
                await driver.wait(until.elementLocated(By.id('option-label-size-143-item-170')),10000);
                let gettingSize4 = await driver.findElement(By.id('option-label-size-143-item-170')).click();

                await driver.wait(until.elementLocated(By.id('option-label-color-93-item-56')),10000);
                let click5 = await driver.findElement(By.id('option-label-color-93-item-56')).click();

                
                await driver.sleep(1000);
                 //Asserts
                assert.equal(gettingSize, 'XS');//Builtin Node
                expect(gettingSize).to.equal('XS');// Chai expect
                gettingSize.should.equal('XS');// Chai should


                await driver.quit();
            }

                            catch(error)
                            {
                                console.log(error);
                            }
                            finally{
                               
                               // await driver.quit();
                            }
                        });
                    });
                });

           
                            
           
           

            
    





      

