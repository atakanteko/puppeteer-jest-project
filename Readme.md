[Jest Puppetieer](https://github.com/smooth-code/jest-puppeteer) testlerimizi çalıştırmak için gerekli olan tüm konfigürasyonları Puppeteer ile hazırlar. Bir page örneği almamıza veya bir browser açmamıza ihtiyaç kalmadan tüm her şey bizim için hazırlanır.

İlk olarak ***jest.config.js*** dosyamızda jest için testleri çalıştırırken gerekli ön ayarın **'jest-puppeteer'** olduğunu söylememiz gerekmektedir.
```python
{
  "preset": "jest-puppeteer"
}
```
Projede yer alan testler için http://zero.webappsecurity.com/ sitesini kullandım.

Bu sitede yer alan birimler için gerekli olan testleri yazdım.