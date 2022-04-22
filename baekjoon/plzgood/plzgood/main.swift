//
//  main.swift
//  plzgood
//
//  Created by 박진홍 on 2022/04/12.
//

import Foundation


//
//import Foundation
//
//let c = readLine()
//if let d = c{
//   let array = d.components(separatedBy: " ")
//    if Int(array[0])! > Int(array[1])! {
//        print(">")
//    }else if Int(array[0])! == Int(array[1])! {
//        print("==")
//    }else {
//        print("<")
//    }
//}



//9498

//let a = readLine()
//if let b = a{
//    let k = Int(b)!
//    if k <= 100 && k >= 90 {
//        print("A")
//    }else if k >= 80 {
//        print("B")
//    }else if k >= 70 {
//        print("C")
//    }else if k >= 60 {
//        print("D")
//    }else {
//        print("F")
//    }
//}
//



//2753

//let a = readLine()
//if let b = a{
//    let c = Int(b)!
//    if (c % 4 == 0 && !(c % 100 == 0)) || (c % 400 == 0) {
//        print("1")
//    } else {
//        print("0")
//    }
//}



//14681

//let x = Int(readLine()!)!
//let y = Int(readLine()!)!
//
//if x > 0 && y > 0{
//    print("1")
//} else if x < 0 && y > 0{
//    print("2")
//} else if x < 0 && y < 0{
//    print("3")
//} else {
//    print("4")
//}



//2884

//import Foundation
//let a = readLine()
//if let b = a {
//    let c = b.components(separatedBy: " ")
//    var hour = Int(c[0])!
//    var min = Int(c[1])! - 45
//    if min < 0 {
//        hour = hour - 1
//        min = min + 60
//    }
//    if hour < 0 {
//        hour = hour + 24
//    }
//    print(hour,min)
//}



//2525

//let a = readLine()
//let b = readLine()
//
//if let c = a{
//    if let d = b{
//        let time = c.components(separatedBy: " ")
//        let cookmin = Int(d)! % 60
//        let cookhour = Int(d)! / 60
//        var hour = Int(time[0])! + cookhour
//        var min = Int(time[1])! + cookmin
//        if min > 59 {
//            hour = hour + 1
//            min = min - 60
//        }
//        if hour > 23 {
//            hour = hour % 24
//        }
//        print(hour,min)
//    }
//}



// 2480

//import Foundation
//let a = readLine()
//if let b = a{
//    let c = b.components(separatedBy: " ")
//    let a1 = Int(c[0])!
//    let a2 = Int(c[1])!
//    let a3 = Int(c[2])!
//    var prise : Int = 0
//    if a1 == a2 && a2 == a3 {
//        prise = 10000 + a1 * 100
//    } else if a1 == a2 {
//        prise = 1000 + a1 * 100
//    } else if a2 == a3 {
//        prise = 1000 + a2 * 100
//    } else if a3 == a1 {
//        prise = 1000 + a3 * 100
//    } else {
//        prise = 100 * max(a1,a2,a3)
//    }
//
//    print(prise)
//}



// 2739

//import Foundation
//let a = readLine()
//if let b = a{
//    let c = Int(b)!
//    for i in 1...9 {
//    print(c,"*",i,"=",c*i)
//    }
//}



// 10950

//import Foundation
//
//let a = readLine()
//
//if let b = a{
//    let c = Int(b)!
//    for _ in 1 ... c{
//        let l = readLine()
//        if let m = l{
//            let arr = m.components(separatedBy: " ")
//            let x = Int(arr[0])!
//            let y = Int(arr[1])!
//            print(x+y)
//        }
//    }
//}



// 8393

//import Foundation
//
//let a = readLine()
//
//if let b = a {
//    let c = Int(b)!
//    var sol = 0
//    for i in 1 ... c {
//        sol = sol + i
//    }
//    print(sol)
//}



//2438

//import Foundation
//
//let a = readLine()
//if let b = a {
//    let c = Int(b)!
//    for i in 1...c {
//        for j in 1...i{
//            print("*",terminator: "")
//        }
//        print("")
//    }
//}
//
//


//15552
//
//import Foundation
//
//let a = Int(readLine()!)!
//
//for _ in 1 ... a {
//    let l = readLine()
//    if let m = l{
//        let arr = m.components(separatedBy: " ")
//        let x = Int(arr[0])!
//        let y = Int(arr[1])!
//        print(x+y)
//}
//}



//2714

//import Foundation
//
//let a = Int(readLine()!)!
//
//for i in 1...a{
//    print(i)
//}



//2742

//import Foundation
//
//let a = Int(readLine()!)!
//
//for i in 0...a-1{
//    var b = a - i
//    print(b)
//}



//11021

//import Foundation
//
//let a = Int(readLine()!)!
//
//for i in 1 ... a {
//    if i == 1{
//        print("")
//    }
//    let l = readLine()
//    if let m = l{
//        let arr = m.components(separatedBy: " ")
//        let x = Int(arr[0])!
//        let y = Int(arr[1])!
//        print("Case #",terminator: "")
//        print(i,terminator: "")
//        print(": ",terminator: "")
//        print(x+y)
//}
//}


//11022

//import Foundation
//
//let a = Int(readLine()!)!
//
//for i in 1 ... a {
//    let l = readLine()
//    if let m = l{
//        let arr = m.components(separatedBy: " ")
//        let x = Int(arr[0])!
//        let y = Int(arr[1])!
//        print("Case #",terminator: "")
//        print(i,terminator: "")
//        print(": ",terminator: "")
//        print(x,terminator: "")
//        print(" + ",terminator: "")
//        print(y,terminator: "")
//        print(" = ",terminator: "")
//        print(x+y)
//}
//}



//2439

//import Foundation
//
//let a = Int(readLine()!)!
//
//for i in 1...a{
//    let k = a - i
//    for j in 0...k{
//        if j == 0 {
//        print("",terminator: "")
//        } else{
//            print(" ",terminator: "")}
//    }
//    for j in 1...i{
//        if j == i {
//            print("*")
//        } else{
//            print("*",terminator: "")}
//    }
//}



//10871
//
//import Foundation
//
//let a = readLine()
//
//if let b = a{
//    let c = Int(b.description.components(separatedBy: " ")[0])!
//    let d = Int(b.description.components(separatedBy: " ")[1])!
//    let ar = readLine()!
//    let arr = ar.description.components(separatedBy: " ")
//    for i in 0...c-1{
//        if Int(arr[i])! < d {
//            print(Int(arr[i])!,terminator:" ")
//        }
//    }
//}
//
//

//10952

//import Foundation
//
//var a : String? = "none"
//
//while true {
//    a = readLine()
//    if a! == "0 0"{
//        break
//    }
//    if let b = a{
//        let c = b.components(separatedBy:" ")
//        let x = Int(c[0])!
//        let y = Int(c[1])!
//        print(x+y)
//    }
//}


//10951

//import Foundation
//
//var a : String? = nil
//
//while true {
//    a = readLine()
//    if a == nil {
//        break
//    }
//    if let b = a{
//        let c = b.components(separatedBy: " ")
//        let x = Int(c[0])!
//        let y = Int(c[1])!
//        print(x+y)
//    }
//}



//1110

//import Foundation
//
//let a = Int(readLine()!)!
//var m = 0
//var n = 0
//if a < 10 {
//    m = 0
//    n = a
//} else {
//    m = a/10 // 2
//    n = a%10 // 6
//}
//var i = 0
//let M = m
//let N = n
//while true {
//    let sum = m + n
//    m = n
//    n = sum % 10
//    i += 1
//    if m == M && n == N {
//        break
//    }
//}
//print(i)



//10818

//import Foundation
//
//let N:Int = Int(readLine()!)!
//let arr: [Int] = readLine()!.split(separator: " ").map{Int(String($0))!}
//print(arr.min()!,arr.max()!)



//2562
//
//import Foundation
//
//var max = 0
//var i = 1
//var j = 1
//var n = 0
//while true {
//    let a = readLine()
//    if let b = a {
//        n = Int(b)!
//    } else {
//        break
//    }
//    if n > max{
//        max = n
//        j = i
//    }
//    i += 1
//}
//print(max)
//print(j)



//2577
//
//import Foundation
//
//let a = Int(readLine()!)!
//let b = Int(readLine()!)!
//let c = Int(readLine()!)!
//
//var N = a*b*c
//var arr = [Int](repeating: 0, count: 10)
//
//var i = 0;
//while N > 0 {
//    let k = N % 10
//    arr[k] += 1
//    N = N/10
//}
//for j in 0 ... 9 {
//    print(arr[j])
//}

//3052

//var arr = [Int](repeating: 0, count: 10)
//var rem = [Int](repeating: 0, count: 10)
//var removed = [Int?](repeating: nil, count: 10)
//for i in 0 ... 9 {
//    arr[i]=Int(readLine()!)!
//    rem[i]=arr[i]%42
//}
//var length = 0
//for i in 0 ... 9 {
//    if removed.contains(rem[i]) == false {
//    removed[i] = rem[i]
//    length += 1
//    }
//}
//
//print(length)



//1546
//
//let N = Int(readLine()!)!
//let a = readLine()!
//let b = a.components(separatedBy: " ")
//var arr = [Double](repeating: 0, count: N)
//for i in 0...N-1 {
//    arr[i]=Double(b[i])!
//}
//let amax = arr.max()
//var sum:Double = 0
//for i in 0...N-1 {
//    arr[i] = arr[i]/amax!*100
//    sum += arr[i]
//}
//let Do = Double(N)
//print(sum/Do)



//8958

//let N = Int(readLine()!)!
//for _ in 1...N {
//    let K = readLine()!.map { String ($0) }
//    var result1 : Int = 0
//    var previous : Int = 0
//    for i in K {
//        if i == "O"
//        {
//            previous += 1
//            result1 += previous
//        } else {
//            previous = 0
//        }
//    }
//
//    print(result1)
//}


//4344

//import Foundation
//let N:Int = Int(readLine()!)!
//for _ in 1...N {
//    let a = readLine()!
//    let b = a.components(separatedBy: " ")
//    let n = Int(b[0])!
//    var sum = 0
//    for i in 1...n {
//        sum += Int(b[i])!
//    }
//    let aver = sum/n
//    var count:Double = 0
//    for i in 1...n {
//        if aver < Int(b[i])!{
//            count += 1
//        }
//    }
//    print(String(format: "%.3f",Float(count)/Float(n)*100)+"%")
//
//}


//4673
//
//import Foundation
//
//var N : Int = 1
//func d(n:Int)-> Int{
//    var result = n
//    var temp = n
//    while temp > 0 {
//        result += temp % 10
//        temp = temp / 10
//    }
//    return result
//}
//
//var arr = [Int] (repeating: 0, count: 10000)
//
//for i in 1..<10000{
//    var temp = i
//    while true {
//        temp = d(n:temp)
//        if temp >= 10000 {
//            break
//        }
//        arr[temp] = arr[temp] + 1
//    }
//}
//
//for i in 1 ... 9999 {
//    if arr[i]==0 {
//        print(i)
//    }
//}



//1065

//import Foundation
//func d(n:Int) -> Bool{
//    let N = n
//    var result : Bool? = nil
//    if N == 1000 {
//        result = false
//        return result!
//    }
//    var temp = 0
//    var index = n
//    var arr = [Int](repeating: 0, count: 3)
//    for i in 0...2{
//        temp = index % 10
//        index = index / 10
//        arr[i] = temp
//    }
//    if arr[2] == 0 {
//        result = true
//    } else if arr[0]-arr[1]==arr[1]-arr[2]{
//        result = true
//    } else {
//        result = false
//    }
//    return result!
//}
//let a = Int(readLine()!)!
//var count = 0 ;
//for i in 1...a{
//    if d(n:i) {
//        count += 1
//    }
//}
//print(count)



//11654


