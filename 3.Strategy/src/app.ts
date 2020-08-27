import FedexService from './services/fedexService'
import DHLService from './services/dhlService'
import UPSService from './services/upsService'
import ShippingService from './services/shippingService'
import { createExampleProduct } from './factory/product'

const fedexService = new FedexService()
const dhlService = new DHLService()
const upsService = new UPSService()
const shippingService = new ShippingService()
const product = createExampleProduct()

async function *sendShippingProductToCompany(payload: any) {
  for (const req of payload) {
    const response = await req()
    yield response
  }
}

const finalSetup = async () => {
  const callsSet = new Set()
  callsSet.add(() => shippingService.buy(fedexService, product))
  callsSet.add(() => shippingService.buy(dhlService, product))
  callsSet.add(() => shippingService.buy(upsService, product))

  const iterator = sendShippingProductToCompany(callsSet)

  for await (const res of iterator) {
    console.log(res)
  }
}

finalSetup()