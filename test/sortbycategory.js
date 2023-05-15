// Includes
const { Builder, By, Key, until } = require('selenium-webdriver');
const should = require('chai').should();

/*
   I want to search for a product
   and view list of products in
    sorted by price.
*/
              describe('Sort by Price', () => {
                // Test case:
                    context('Searched category is displayed', () => {
                        it('I see the selected product in sorted order', async () => {
                            // Start web browser
                            const driver = await new Builder().forBrowser('firefox').build();
                            try{

                                await driver.get('https://magento.softwaretestingboard.com/');
                                 // Get the search input
                                 await driver.wait(until.elementLocated(By.css('.ui-menu-item')), 20000);
                                 await driver.findElement(By.css('.ui-menu-item > a:nth-child(1)')).click();

                                 let back = await driver.navigate().back();
                                 await driver.sleep(2000);
                                 await driver.wait(until.elementLocated(By.css('.parent.ui-menu-item')), 20000);
                                 await driver.findElement(By.css('.parent.ui-menu-item > a:nth-child(1)')).click();
                                 await driver.sleep(20000);
                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Tops')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Tops')]")).click();
                                 await driver.navigate().back();
                                 await driver.sleep(5000);

                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Bottoms')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Bottoms')]")).click();
                                 await driver.sleep(2000);
                                let back1 = await driver.navigate().back();
                                 await driver.sleep(2000);
                                 await driver.wait(until.elementLocated(By.css('a[href$="/men.html"]')),10000);
                                 await driver.findElement(By.css('a[href$="/men.html"]')).click();

                                 await driver.sleep(10000);
                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Tops')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Tops')]")).click();
                                 await driver.navigate().back();
                                 await driver.sleep(10000);

                                 await driver.wait(until.elementLocated(By.xpath("//a[contains(text(),'Bottoms')]")), 20000);
                                 await driver.findElement(By.xpath("//a[contains(text(),'Bottoms')]")).click();
                
                                 //await driver.quit();

                                 }catch(error)
                                 {
                                console.log(error);
                                }
                                finally{
                               
                                 await driver.quit();
                                 }
                        });
                    });
                });

           
                            
           
           

            
    





      

