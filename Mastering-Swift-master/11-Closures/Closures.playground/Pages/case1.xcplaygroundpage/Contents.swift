//: [Previous](@previous)

import Foundation
import os

let products = [
   "MacBook Air", "MacBook Pro",
   "iMac", "iMac Pro", "Mac Pro", "Mac mini",
   "iPad Pro", "iPad", "iPad mini",
   "iPhone Xs", "iPhone Xr", "iPhone 8", "iPhone 7",
   "AirPods",
   "Apple Watch Series 4", "Apple Watch Nike+"
]

var proModels = products.filter({(name: String)->Bool in
    return name.contains("Pro")
})

print(proModels)

print(proModels.sorted())

proModels.sort(by: <#T##(String, String) throws -> Bool#>)







//: [Next](@next)
