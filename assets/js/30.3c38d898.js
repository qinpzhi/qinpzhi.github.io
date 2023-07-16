(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{320:function(v,_,a){"use strict";a.r(_);var t=a(14),r=Object(t.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("img",{attrs:{src:"/images/jvm/jvm1.png"}}),v._v(" "),_("h2",{attrs:{id:"一、程序计数器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、程序计数器"}},[v._v("#")]),v._v(" 一、程序计数器")]),v._v(" "),_("div",{staticClass:"language-hxml extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("PC寄存器用来存储指向下一条指令的地址，也就是即将要执行的指定代码。由执行引擎读取下一条指令。\n")])])]),_("ul",[_("li",[v._v("很小的内存空间，运行最快的存储区域；")]),v._v(" "),_("li",[v._v("线程私有，生命周期和线程的生命周期一致；任何时间一个线程都只有一个方法在执行，也就是所谓的"),_("strong",[v._v("当前方法")]),v._v("。如果当前线程正在执行的是 Java 方法，程序计数器记录的是 JVM 字节码指令地址，如果是执行 native 方法，则是未指定值（undefined）;")]),v._v(" "),_("li",[v._v("它是程序控制流的指示器，分支、循环、跳转、异常处理、线程恢复等基础功能都需要依赖这个计数器来完成；")]),v._v(" "),_("li",[_("strong",[v._v("它是唯一一个在 JVM 规范中没有规定任何 "),_("code",[v._v("OutOfMemoryError")]),v._v(" 情况的区域")])])]),v._v(" "),_("h2",{attrs:{id:"二、虚拟机栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、虚拟机栈"}},[v._v("#")]),v._v(" 二、虚拟机栈")]),v._v(" "),_("h3",{attrs:{id:"_2-1-概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-概述"}},[v._v("#")]),v._v(" 2.1 概述")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("栈是运行时的单位，而堆是存储的单位\n")])])]),_("p",[v._v("Java虚拟机栈，早期也叫做java栈。每个线程在创建时都会创建一个虚拟机栈，其内部保存一个个的栈帧（Stack Frame），对应着一次次的"),_("font",{attrs:{color:"red"}},[_("strong",[v._v("方法")])]),v._v("调用。是线程私有的，生命周期和线程一致，主管java程序的运行，它保存方法的局部变量、部分结果并参与方法的调用和返回。")],1),v._v(" "),_("p",[_("strong",[v._v("特点")]),v._v("：")]),v._v(" "),_("ul",[_("li",[v._v("栈是一种快速有效的分配存储方式，访问速度仅次于程序计数器")]),v._v(" "),_("li",[v._v("JVM 直接对虚拟机栈的操作只有两个：每个方法执行，伴随着"),_("strong",[v._v("入栈")]),v._v("（进栈/压栈），方法执行结束"),_("strong",[v._v("出栈")])]),v._v(" "),_("li",[_("strong",[v._v("栈不存在垃圾回收问题")])])]),v._v(" "),_("p",[_("strong",[v._v("栈中可能出现的异常")]),v._v("：")]),v._v(" "),_("p",[v._v("Java 虚拟机规范允许 "),_("strong",[v._v("Java虚拟机栈的大小是动态的或者是固定不变的")])]),v._v(" "),_("ul",[_("li",[v._v("如果采用固定大小的 Java 虚拟机栈，那每个线程的 Java 虚拟机栈容量可以在线程创建的时候独立选定。如果线程请求分配的栈容量超过 Java 虚拟机栈允许的最大容量，Java 虚拟机将会抛出一个 "),_("strong",[v._v("StackOverflowError")]),v._v(" 异常")]),v._v(" "),_("li",[v._v("如果 Java 虚拟机栈可以动态扩展，并且在尝试扩展的时候无法申请到足够的内存，或者在创建新的线程时没有足够的内存去创建对应的虚拟机栈，那 Java 虚拟机将会抛出一个"),_("strong",[v._v("OutOfMemoryError")]),v._v("异常")])]),v._v(" "),_("h3",{attrs:{id:"_2-2-栈的存储单元"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-栈的存储单元"}},[v._v("#")]),v._v(" 2.2 栈的存储单元")]),v._v(" "),_("img",{attrs:{src:"/images/jvm/stack1.png"}}),v._v("\n每个线程都有自己的栈，栈中的数据都是以**栈帧（Stack Frame）的格式存在**；在这个线程上正在执行的每个方法都各自有对应的一个栈帧；栈帧是一个内存区块，是一个数据集，维系着方法执行过程中的各种数据信息\n"),_("p",[v._v("在一条活动线程中，一个时间点上，只会有一个活动的栈帧。即只有当前正在执行的方法的栈帧（"),_("strong",[v._v("栈顶栈帧")]),v._v("）是有效的，这个栈帧被称为"),_("strong",[v._v("当前栈帧")]),v._v("（Current Frame），与当前栈帧对应的方法就是"),_("strong",[v._v("当前方法")]),v._v("（Current Method），定义这个方法的类就是"),_("strong",[v._v("当前类")]),v._v("（Current Class）；Java 方法有两种返回函数的方式，"),_("strong",[v._v("一种是正常的函数返回，使用 return 指令，另一种是抛出异常，不管用哪种方式，都会导致栈帧被弹出")])]),v._v(" "),_("p",[v._v("每个"),_("strong",[v._v("栈帧")]),v._v("（Stack Frame）中存储着：")]),v._v(" "),_("ul",[_("li",[v._v("局部变量表（Local Variables）")]),v._v(" "),_("li",[v._v("操作数栈（Operand Stack）(或称为表达式栈)")]),v._v(" "),_("li",[v._v("动态链接（Dynamic Linking）：指向运行时常量池的方法引用")]),v._v(" "),_("li",[v._v("方法返回地址（Return Address）：方法正常退出或异常退出的地址")]),v._v(" "),_("li",[v._v("一些附加信息")])]),v._v(" "),_("h3",{attrs:{id:"_2-3局部变量表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-3局部变量表"}},[v._v("#")]),v._v(" 2.3局部变量表")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("局部变量表也被称为局部变量数组或者本地变量表")])]),v._v(" "),_("li",[_("p",[v._v("是一组变量值存储空间，"),_("strong",[v._v("主要用于存储方法参数和定义在方法体内的局部变量")]),v._v("，包括编译器可知的各种 Java 虚拟机"),_("strong",[v._v("基本数据类型")]),v._v("（boolean、byte、char、short、int、float、long、double）、"),_("strong",[v._v("对象引用")]),v._v("（reference类型，它并不等同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或其他与此相关的位置）和 "),_("strong",[v._v("returnAddress")]),v._v(" 类型（指向了一条字节码指令的地址，已被异常表取代）")])]),v._v(" "),_("li",[_("p",[v._v("由于局部变量表是建立在线程的栈上，是线程的私有数据，因此"),_("strong",[v._v("不存在数据安全问题")])])]),v._v(" "),_("li",[_("p",[v._v("局部变量表所需要的容量大小是编译期确定下来的**，并保存在方法的 Code 属性的 "),_("code",[v._v("maximum local variables")]),v._v(" 数据项中。在方法运行期间是不会改变局部变量表的大小的")])]),v._v(" "),_("li",[_("p",[v._v("局部变量表，最基本的存储单元式"),_("font",{attrs:{color:"red"}},[_("strong",[v._v("Slot（变量槽）")])]),v._v(":32位以内的类型只占用一个slot（包括returnAddress类型），64位的类型（long和double）占用两个slot")],1),v._v(" "),_("ul",[_("li",[v._v("byte、short、char 在存储前被转换为int，boolean也被转换为int，0 表示 false，非 0 表示 true")]),v._v(" "),_("li",[v._v("long 和 double 则占据两个 Slot")]),v._v(" "),_("li",[v._v("栈帧中的局部变量表中的槽位是可以重用的")]),v._v(" "),_("li",[v._v("如果当前帧是由构造方法或实例方法创建的，那么该对象引用 this 将会存放在 index 为 0 的 Slot 处，其余的参数按照参数表顺序继续排列")])])]),v._v(" "),_("li",[_("p",[v._v("在栈帧中，与性能调优关系最为密切的就是局部变量表。在方法执行时，虚拟机使用局部变量表完成方法的传递")])]),v._v(" "),_("li",[_("p",[_("font",{attrs:{color:"red"}},[_("strong",[v._v("局部变量表中的变量也是重要的垃圾回收根节点，只要被局部变量表中直接或间接引用的对象都不会被回收")])])],1)])]),v._v(" "),_("h3",{attrs:{id:"_2-4操作数栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-4操作数栈"}},[v._v("#")]),v._v(" 2.4操作数栈")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("操作数栈，"),_("strong",[v._v("主要用于保存计算过程的中间结果，同时作为计算过程中变量临时的存储空间")])])]),v._v(" "),_("li",[_("p",[v._v("操作数栈就是 JVM 执行引擎的一个工作区，当一个方法刚开始执行的时候，一个新的栈帧也会随之被创建出来，"),_("strong",[v._v("此时这个方法的操作数栈是空的")])])]),v._v(" "),_("li",[_("p",[v._v("我们说"),_("strong",[v._v("Java虚拟机的解释引擎是基于栈的执行引擎")]),v._v("，其中的栈指的就是操作数栈")])])]),v._v(" "),_("p",[_("code",[v._v("栈顶缓存：**将栈顶元素全部缓存在物理 CPU 的寄存器中，以此降低对内存的读/写次数，提升执行引擎的执行效率")]),v._v("**")]),v._v(" "),_("h3",{attrs:{id:"_2-5动态链接-指向运行时常量池的方法引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5动态链接-指向运行时常量池的方法引用"}},[v._v("#")]),v._v(" 2.5动态链接（指向运行时常量池的方法引用）")]),v._v(" "),_("img",{attrs:{src:"/images/jvm/stack2.jpg"}}),v._v(" "),_("ul",[_("li",[_("p",[_("strong",[v._v("每一个栈帧内部都包含一个指向运行时常量池中该栈帧所属方法的引用")]),v._v("。包含这个引用的目的就是为了支持当前方法的代码能够实现动态链接(Dynamic Linking)。")])]),v._v(" "),_("li",[_("p",[v._v("在 Java 源文件被编译到字节码文件中时，所有的变量和方法引用都作为"),_("strong",[v._v("符号引用")]),v._v("（Symbolic Reference）保存在 Class 文件的常量池中。比如：描述一个方法调用了另外的其他方法时，就是通过常量池中指向方法的符号引用来表示的，那么**动态链接的作用就是为了将这些符号引用转换为调用方法的直接引用")]),v._v(" "),_("h4",{attrs:{id:"扩展-方法的调用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#扩展-方法的调用"}},[v._v("#")]),v._v(" 扩展：方法的调用")]),v._v(" "),_("ol",[_("li",[_("p",[_("strong",[v._v("静态链接")]),v._v("：当一个字节码文件被装载进 JVM 内部时，如果被调用的"),_("strong",[v._v("目标方法在编译期可知")]),v._v("，且运行期保持不变时。这种情况下将调用方法的符号引用转换为直接引用的过程称之为静态链接"),_("br"),v._v(" "),_("strong",[v._v("动态链接")]),v._v("：如果被调用的方法在编译期无法被确定下来，也就是说，只能在程序运行期将调用方法的符号引用转换为直接引用，由于这种引用转换过程具备动态性，因此也就被称之为动态链接")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("早期绑定")]),v._v("："),_("strong",[v._v("早期绑定就是指被调用的目标方法如果在编译期可知，且运行期保持不变时")]),v._v("，即可将这个方法与所属的类型进行绑定，这样一来，由于明确了被调用的目标方法究竟是哪一个，因此也就可以使用静态链接的方式将符号引用转换为直接引用。"),_("br"),v._v(" "),_("strong",[v._v("晚期绑定")]),v._v("：如果被调用的方法在编译器无法被确定下来，只能够在程序运行期根据实际的类型绑定相关的方法，这种绑定方式就被称为晚期绑定。")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("虚方法")]),v._v(":如果果方法在编译器就确定了具体的调用版本，这个版本在运行时是不可变的。这样的方法称为非虚方法，比如静态方法、私有方法、final 方法、实例构造器、父类方法都是非虚方法"),_("br"),v._v(" "),_("strong",[v._v("非虚方法")]),v._v(":其他方法称为虚方法")])]),v._v(" "),_("li",[_("p",[v._v("普通调用指令："),_("br"),v._v("\ninvokestatic:调用静态方法，解析阶段确定唯一方法版本"),_("br"),v._v("\ninvokespecial:调用"),_("code",[v._v("<init>")]),v._v("方法、私有及父类方法、解析阶段确定唯一方法版本"),_("br"),v._v("\ninvokevirtual：调用所有虚方法"),_("br"),v._v("\ninvokeinterface:调用接口方法"),_("br"),v._v("\n动态调用指令："),_("br"),v._v("\ninvokedynamic:动态解析出所要调用的方法，然后执行。是java8的Lambda表达式出现，才产生了这个指令。java是一个静态语言，lamdba的出现使其支持了动态属性。（动态语言和静态语言的区别在于类型的检查在编译器还是运行期）"),_("br"),_("font",{attrs:{color:"red"}},[v._v("其中invokestatic指令和invokespecial指令调用的方法称为非虚方法，其余（final修饰的除外）称为虚方法")])],1)]),v._v(" "),_("li",[_("p",[v._v("虚方法表：在面向对象编程中，会频繁的使用到动态分派，如果每次动态分派都要重新在类的方法元数据中搜索合适的目标有可能会影响到执行效率。为了提高性能，JVM 采用在类的方法区建立一个虚方法表（virtual method table），使用索引表来代替查找。非虚方法不会出现在表中。"),_("br"),v._v("\n每个类中都有一个虚方法表，表中存放着各个方法的实际入口。"),_("br"),v._v("\n虚方法表会在类加载的连接阶段被创建并开始初始化，类的变量初始值准备完成之后，JVM 会把该类的方法表也初始化完毕。"),_("br")])])])])]),v._v(" "),_("h3",{attrs:{id:"_2-5方法返回地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-5方法返回地址"}},[v._v("#")]),v._v(" 2.5方法返回地址")]),v._v(" "),_("p",[v._v("方法正常退出时，调用者的 PC 计数器的值作为返回地址，即调用该方法的指令的下一条指令的地址。而通过异常退出的，返回地址是要通过异常表来确定的，栈帧中一般不会保存这部分信息。")]),v._v(" "),_("p",[v._v("当一个方法开始执行后，只有两种方式可以退出这个方法：")]),v._v(" "),_("ol",[_("li",[v._v("执行引擎遇到任意一个方法返回的字节码指令，会有返回值传递给上层的方法调用者，简称正常完成出口一个方法的正常调用完成之后究竟需要使用哪一个返回指令还需要根据方法返回值的实际数据类型而定在字节码指令中，返回指令包含 ireturn(当返回值是 boolean、byte、char、short 和 int 类型时使用)、lreturn(long类型)、freturn（float类型）、dreturn(double类型)以及 areturn（引用类型，比如String、Date），另外还有一个 return 指令供声明为 void 的方法、实例初始化方法、类和接口的初始化方法使用。")]),v._v(" "),_("li",[v._v("在方法执行的过程中遇到了异常，并且这个异常没有在方法内进行处理，也就是只要在本方法的异常表中没有搜索到匹配的异常处理器，就会导致方法退出。简称异常完成出口方法执行过程中抛出异常时的异常处理，存储在一个"),_("font",{attrs:{color:"red"}},[_("strong",[v._v("异常处理表")])]),v._v("，方便在发生异常的时候找到处理异常的代码。")],1)]),v._v(" "),_("h3",{attrs:{id:"_2-6附加信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-6附加信息"}},[v._v("#")]),v._v(" 2.6附加信息")]),v._v(" "),_("p",[v._v("栈帧中还允许携带与 Java 虚拟机实现相关的一些附加信息。例如，对程序调试提供支持的信息，但这些信息取决于具体的虚拟机实现。")]),v._v(" "),_("h2",{attrs:{id:"三、本地方法栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、本地方法栈"}},[v._v("#")]),v._v(" 三、本地方法栈")]),v._v(" "),_("h3",{attrs:{id:"_3-1-本地方法接口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-本地方法接口"}},[v._v("#")]),v._v(" 3.1 本地方法接口")]),v._v(" "),_("p",[v._v("为什么使用Native Method?")]),v._v(" "),_("ul",[_("li",[v._v("与 Java 环境外交互：有时 Java 应用需要与 Java 外面的环境交互，这就是本地方法存在的原因。")]),v._v(" "),_("li",[v._v("与操作系统交互：JVM 支持 Java 语言本身和运行时库，但是有时仍需要依赖一些底层系统的支持。通过本地方法，我们可以实现用 Java 与实现了 jre 的底层系统交互， JVM 的一些部分就是 C 语言写的。")]),v._v(" "),_("li",[v._v("Sun's Java：Sun的解释器就是C实现的，这使得它能像一些普通的C一样与外部交互。jre大部分都是用 Java 实现的，它也通过一些本地方法与外界交互。比如，类 "),_("code",[v._v("java.lang.Thread")]),v._v(" 的 "),_("code",[v._v("setPriority()")]),v._v(" 的方法是用Java 实现的，但它实现调用的是该类的本地方法 "),_("code",[v._v("setPrioruty()")]),v._v("，该方法是C实现的，并被植入 JVM 内部。")])]),v._v(" "),_("p",[v._v("现状：")]),v._v(" "),_("ul",[_("li",[v._v("目前该方法使用的越来越少了，除非是与硬件有关的应用。3")])]),v._v(" "),_("h3",{attrs:{id:"_3-2-本地方法栈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-本地方法栈"}},[v._v("#")]),v._v(" 3.2 本地方法栈")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("Java 虚拟机栈用于管理 Java 方法的调用，而本地方法栈用于管理本地方法的调用")])]),v._v(" "),_("li",[_("p",[v._v("本地方法栈也是线程私有的")])]),v._v(" "),_("li",[_("p",[v._v("允许线程固定或者可动态扩展的内存大小")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("如果线程请求分配的栈容量超过本地方法栈允许的最大容量，Java 虚拟机将会抛出一个 "),_("code",[v._v("StackOverflowError")]),v._v(" 异常")])]),v._v(" "),_("li",[_("p",[v._v("如果本地方法栈可以动态扩展，并且在尝试扩展的时候无法申请到足够的内存，或者在创建新的线程时没有足够的内存去创建对应的本地方法栈，那么 Java虚拟机将会抛出一个"),_("code",[v._v("OutofMemoryError")]),v._v("异常")])])])]),v._v(" "),_("li",[_("p",[v._v("本地方法是使用 C 语言实现的")])]),v._v(" "),_("li",[_("p",[v._v("它的具体做法是 "),_("code",[v._v("Native Method Stack")]),v._v(" 中登记 native 方法，在 "),_("code",[v._v("Execution Engine")]),v._v(" 执行时加载本地方法库当某个线程调用一个本地方法时，它就进入了一个全新的并且不再受虚拟机限制的世界。它和虚拟机拥有同样的权限。")]),v._v(" "),_("ul",[_("li",[v._v("本地方法可以通过本地方法接口来访问虚拟机内部的运行时数据区。")]),v._v(" "),_("li",[v._v("它甚至可以直接使用本地处理器中的寄存器。")]),v._v(" "),_("li",[v._v("直接从本地内存的堆中分配任意数量的内存。")])])]),v._v(" "),_("li",[_("p",[v._v("并不是所有 JVM 都支持本地方法。因为 Java 虚拟机规范并没有明确要求本地方法栈的使用语言、具体实现方式、数据结构等。如果 JVM 产品不打算支持 native 方法，也可以无需实现本地方法栈")])]),v._v(" "),_("li",[_("p",[v._v("在 Hotspot JVM 中，直接将本地方法栈和虚拟机栈合二为一")])])]),v._v(" "),_("h2",{attrs:{id:"四、堆"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、堆"}},[v._v("#")]),v._v(" 四、堆")]),v._v(" "),_("h3",{attrs:{id:"_4-1-堆的核心概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-堆的核心概述"}},[v._v("#")]),v._v(" 4.1 堆的核心概述")]),v._v(" "),_("img",{attrs:{src:"/images/jvm/heap1.png"}}),v._v("\n- 一个JVM实例只存在一个堆内存，堆也是java内存管理的核心区域。\n"),_("ul",[_("li",[_("p",[v._v("Java堆区在JVM启动的时候即被创建，其空间大小也就确定了，是JVM管理的最大一块内存空间。")]),v._v(" "),_("ul",[_("li",[v._v("堆内存的大小是可以调节的")])])]),v._v(" "),_("li",[_("p",[v._v("堆可以处于物理上不连续的内存空间中，但是在逻辑上应该视为连续的。")])]),v._v(" "),_("li",[_("p",[v._v("所有线程共享Java堆，在这里还可以划分线程私有的缓冲区（Thread Local Allocation Buffer，TLAB）。")])]),v._v(" "),_("li",[_("p",[_("font",{attrs:{color:"red"}},[v._v("几乎所有")]),v._v("的对象实例及数组都应该在运行时分配在堆上。")],1)]),v._v(" "),_("li",[_("p",[v._v("在方法结束后，堆中的对象不会马上被移除，仅仅在垃圾收集器的时候才会被移除")])]),v._v(" "),_("li",[_("p",[v._v("堆，是GC（Garbage Collection，垃圾收集器）执行垃圾回收的重点区域。")])])]),v._v(" "),_("img",{attrs:{src:"/images/jvm/heap2.jpg"}}),v._v(" "),_("p",[v._v("为了进行高效的垃圾回收，虚拟机把堆内存"),_("strong",[v._v("逻辑上")]),v._v("划分成三块区域（分代的唯一理由就是优化 GC 性能）：")]),v._v(" "),_("ul",[_("li",[v._v("新生带（年轻代）：新对象和没达到一定年龄的对象都在新生代")]),v._v(" "),_("li",[v._v("老年代（养老区）：被长时间使用的对象，老年代的内存空间应该要比年轻代更大")]),v._v(" "),_("li",[v._v("元空间 Meta Space（JDK1.8 之前叫永久代 Permanent Space）：像一些方法中的操作临时对象等，JDK1.8 之前是占用 JVM 内存，JDK1.8 之后直接使用物理内存")])]),v._v(" "),_("h3",{attrs:{id:"_4-2对象的分配过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-2对象的分配过程"}},[v._v("#")]),v._v(" 4.2对象的分配过程")]),v._v(" "),_("img",{attrs:{src:"/images/jvm/heap3.png"}}),v._v(" "),_("ul",[_("li",[_("p",[v._v("默认是标记次数15次，可以进入老年代。")])]),v._v(" "),_("li",[_("p",[v._v("针对幸存者S0,S1区的总结：复制之后又交换，谁空谁是to.")])]),v._v(" "),_("li",[_("p",[v._v("关于垃圾回收：频繁在新生代收集，很少在老年代收集，几乎不在永久区/元空间收集。")])])]),v._v(" "),_("h3",{attrs:{id:"_4-3-minor-gc、major-gc、full-gc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-minor-gc、major-gc、full-gc"}},[v._v("#")]),v._v(" 4.3 Minor GC、Major GC、Full GC")]),v._v(" "),_("p",[v._v("JVM 在进行 GC 时，并非每次都对堆内存（新生代、老年代；方法区）区域一起回收的，大部分时候回收的都是指新生代。")]),v._v(" "),_("p",[v._v("针对 HotSpot VM 的实现，它里面的 GC 按照回收区域又分为两大类：部分收集（Partial GC），整堆收集（Full GC）")]),v._v(" "),_("ul",[_("li",[v._v("部分收集：不是完整收集整个 Java 堆的垃圾收集。其中又分为：\n"),_("ul",[_("li",[v._v("新生代收集（Minor GC/Young GC）：只是新生代的垃圾收集")]),v._v(" "),_("li",[v._v("老年代收集（Major GC/Old GC）：只是老年代的垃圾收集\n"),_("ul",[_("li",[v._v("目前，只有 CMS GC 会有单独收集老年代的行为")]),v._v(" "),_("li",[v._v("很多时候 Major GC 会和 Full GC 混合使用，需要具体分辨是老年代回收还是整堆回收")])])]),v._v(" "),_("li",[v._v("混合收集（Mixed GC）：收集整个新生代以及部分老年代的垃圾收集\n"),_("ul",[_("li",[v._v("目前只有 G1 GC 会有这种行为")])])])])]),v._v(" "),_("li",[v._v("整堆收集（Full GC）：收集整个 Java 堆和方法区的垃圾")])]),v._v(" "),_("p",[v._v("年轻代GC（Minor GC）触发机制：")]),v._v(" "),_("ul",[_("li",[v._v("当年轻代空间不足时，就会触发Minor GC，这里的年轻代满指的是Eden代满，Survivor满不会引发GC。（每次Minor GC 会清理年轻代的内存。）")]),v._v(" "),_("li",[v._v("因为java对象大多都是具备朝生夕灭的特性，所以Minor GC非常频繁，一般回收速度也比较快。")]),v._v(" "),_("li",[v._v("Minor GC会引发STW （Stop the world）,暂停其他用户的线程，等垃圾回收结束，用户线程才恢复运行。")])]),v._v(" "),_("p",[v._v("老年代GC（Major GC/Full GC）触发机制：")]),v._v(" "),_("ul",[_("li",[v._v("指发生在老年代的GC，对象从老年代消失时，我们说Major GC或者Full GC发生了。")]),v._v(" "),_("li",[v._v("Major GC的速度一般比Minor GC慢10倍以上，STW的时间更长。")]),v._v(" "),_("li",[v._v("如果Major GC后，内存还不足，就报OOM了。")]),v._v(" "),_("li",[v._v("出现了Major GC,经常会伴随至少一次的Minor GC（但非绝对的，例如 Parallel Scavenge收集器）：也就是在老年代空间不足时，会先尝试触发Minor GC，如果之后空间还不足，则触发Major GC。")])]),v._v(" "),_("p",[v._v("Full GC触发机制")]),v._v(" "),_("ul",[_("li",[v._v("调用System.gc()，系统建议执行Full GC，但是不是必然执行")]),v._v(" "),_("li",[v._v("老年代空间不足")]),v._v(" "),_("li",[v._v("方法区空间不足")]),v._v(" "),_("li",[v._v("通过Minor GC后进入老年代的平均大小大于老年代的可用内存")]),v._v(" "),_("li",[v._v("由Eden区，survivor0 (From space)区向survivor1 (To Space) 区复制时，对象大小大于To Space可用内存，则把该对象转存到老年代，且老年代的可用内存小于该对象大小。")])]),v._v(" "),_("h3",{attrs:{id:"_4-4-tlab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-tlab"}},[v._v("#")]),v._v(" 4.4 TLAB")]),v._v(" "),_("h4",{attrs:{id:"为什么要有-tlab"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有-tlab"}},[v._v("#")]),v._v(" 为什么要有 TLAB ?")]),v._v(" "),_("ul",[_("li",[v._v("堆区是线程共享的，任何线程都可以访问到堆区中的共享数据")]),v._v(" "),_("li",[v._v("由于对象实例的创建在 JVM 中非常频繁，因此在并发环境下从堆区中划分内存空间是线程不安全的")]),v._v(" "),_("li",[v._v("为避免多个线程操作同一地址，需要使用加锁等机制，进而影响分配速度")])]),v._v(" "),_("h4",{attrs:{id:"什么是-tlab-thread-local-allocation-buffer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tlab-thread-local-allocation-buffer"}},[v._v("#")]),v._v(" 什么是 TLAB （Thread Local Allocation Buffer）?")]),v._v(" "),_("ul",[_("li",[v._v("从内存模型而不是垃圾回收的角度，对 Eden 区域继续进行划分，JVM 为每个线程分配了一个私有缓存区域，它包含在 Eden 空间内")]),v._v(" "),_("li",[v._v("多线程同时分配内存时，使用 TLAB 可以避免一系列的非线程安全问题，同时还能提升内存分配的吞吐量，因此我们可以将这种内存分配方式称为"),_("strong",[v._v("快速分配策略")])]),v._v(" "),_("li",[v._v("OpenJDK 衍生出来的 JVM 大都提供了 TLAB 设计")]),v._v(" "),_("li",[v._v("尽管不是所有的对象实例都能够在 TLAB 中成功分配内存，但 JVM 确实是将 TLAB 作为内存分配的首选。")])]),v._v(" "),_("h3",{attrs:{id:"_4-5-逃逸分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-逃逸分析"}},[v._v("#")]),v._v(" 4.5 逃逸分析")]),v._v(" "),_("p",[_("strong",[v._v("逃逸分析(Escape Analysis)是目前 Java 虚拟机中比较前沿的优化技术。这是一种可以有效减少 Java 程序中同步负载和内存堆分配压力的跨函数全局数据流分析算法")]),v._v("。通过逃逸分析，Java Hotspot 编译器能够分析出一个新的对象的引用的使用范围从而决定是否要将这个对象分配到堆上。")]),v._v(" "),_("p",[v._v("逃逸分析的基本行为就是分析对象动态作用域：")]),v._v(" "),_("ul",[_("li",[v._v("当一个对象在方法中被定义后，对象只在方法内部使用，则认为没有发生逃逸。")]),v._v(" "),_("li",[v._v("当一个对象在方法中被定义后，它被外部方法所引用，则认为发生逃逸。例如作为调用参数传递到其他地方中，称为方法逃逸。")])]),v._v(" "),_("p",[v._v("使用逃逸分析，编译器可以对代码做优化：")]),v._v(" "),_("p",[_("strong",[v._v("栈上分配")]),v._v("：将堆分配转化为栈分配。如果一个对象在子程序中被分配，要使指向该对象的指针永远不会逃逸，对象可能是栈分配的候选，而不是堆分配")]),v._v(" "),_("p",[_("strong",[v._v("同步省略")]),v._v("：如果一个对象被发现只能从一个线程被访问到，那么对于这个对象的操作可以不考虑同步")]),v._v(" "),_("p",[_("strong",[v._v("分离对象或标量替换")]),v._v("：有的对象可能不需要作为一个连续的内存结构存在也可以被访问到，那么对象的部分（或全部）可以不存储在内存，而存储在 CPU 寄存器")]),v._v(" "),_("h2",{attrs:{id:"五、方法区"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、方法区"}},[v._v("#")]),v._v(" 五、方法区")]),v._v(" "),_("ul",[_("li",[v._v("方法区（Method Area）与 Java 堆一样，是所有线程共享的内存区域。")]),v._v(" "),_("li",[v._v("虽然 Java 虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫 Non-Heap（非堆），目的应该是与 Java 堆区分开。")]),v._v(" "),_("li",[v._v("运行时常量池（Runtime Constant Pool）是方法区的一部分。Class 文件中除了有类的版本/字段/方法/接口等描述信息外，还有一项信息是常量池（Constant Pool Table），用于存放编译期生成的各种字面量和符号引用，这部分内容将类在加载后进入方法区的运行时常量池中存放。运行期间也可能将新的常量放入池中，这种特性被开发人员利用得比较多的是 "),_("code",[v._v("String.intern()")]),v._v("方法。受方法区内存的限制，当常量池无法再申请到内存时会抛出 "),_("code",[v._v("OutOfMemoryErro")]),v._v("r 异常。")]),v._v(" "),_("li",[v._v("方法区的大小和堆空间一样，可以选择固定大小也可选择可扩展，方法区的大小决定了系统可以放多少个类，如果系统类太多，导致方法区溢出，虚拟机同样会抛出内存溢出错误\n"),_("ul",[_("li",[v._v("加载大量的第三方的jar包；tomcat部署的工程过多（30-50个）；大量动态的生成反射类")])])]),v._v(" "),_("li",[v._v("JVM 关闭后方法区即被释放")])]),v._v(" "),_("h3",{attrs:{id:"_5-1-方法区的演进"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-方法区的演进"}},[v._v("#")]),v._v(" 5.1 方法区的演进")]),v._v(" "),_("p",[_("strong",[v._v("方法区（method area）只是 JVM 规范中定义的一个概念")]),v._v("，用于存储类信息、常量池、静态变量、JIT编译后的代码等数据，并没有规定如何去实现它，不同的厂商有不同的实现。而"),_("strong",[v._v("永久代（PermGen）是 Hotspot 虚拟机特有的概念， Java8 的时候又被元空间")]),v._v("取代了，永久代和元空间都可以理解为方法区的落地实现。")]),v._v(" "),_("p",[v._v("只有 HotSpot 才有永久代的概念")]),v._v(" "),_("table",[_("thead",[_("tr",[_("th",[v._v("版本")]),v._v(" "),_("th",[v._v("是否有永久代，字符串常量池放在哪里？")]),v._v(" "),_("th",[v._v("方法区逻辑上规范，由哪些实际的部分实现的？")])])]),v._v(" "),_("tbody",[_("tr",[_("td",[v._v("jdk1.6及之前")]),v._v(" "),_("td",[v._v("有永久代，静态变量存放在永久代上")]),v._v(" "),_("td",[v._v("这个时期方法区在HotSpot中是由永久代来实现的，以至于"),_("strong",[v._v("这个时期说方法区就是指永久代")])])]),v._v(" "),_("tr",[_("td",[v._v("jdk1.7")]),v._v(" "),_("td",[v._v("有永久代，但已经逐步“去永久代”，字符串常量池、静态变量移除，保存在堆中")]),v._v(" "),_("td",[v._v("这个时期方法区在HotSpot中由"),_("strong",[v._v("永久代")]),v._v("（类型信息、字段、方法、常量）和"),_("strong",[v._v("堆")]),v._v("（字符串常量池、静态变量）共同实现")])]),v._v(" "),_("tr",[_("td",[v._v("jdk1.8及之后")]),v._v(" "),_("td",[v._v("取消永久代，类型信息、字段、方法、常量保存在本地内存的元空间，但字符串常量池、静态变量仍在堆中")]),v._v(" "),_("td",[v._v("这个时期方法区在HotSpot中由本地内存的"),_("strong",[v._v("元空间")]),v._v("（类型信息、字段、方法、常量）和"),_("strong",[v._v("堆")]),v._v("（字符串常量池、静态变量）共同实现")])])])]),v._v(" "),_("p",[v._v("移除永久代的原因：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("为永久代设置空间大小是很难确定的。")]),v._v(" "),_("p",[v._v("在某些场景下，如果动态加载类过多，容易产生 Perm 区的 OOM。如果某个实际 Web 工程中，因为功能点比较多，在运行过程中，要不断动态加载很多类，经常出现 OOM。而元空间和永久代最大的区别在于，元空间不在虚拟机中，而是使用本地内存，所以默认情况下，元空间的大小仅受本地内存限制")])]),v._v(" "),_("li",[_("p",[v._v("对永久代进行调优较困难。")])])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("移除了永久代（PermGen），替换为元空间（Metaspace）；元空间不在虚拟机设置的内存中，而是使用本地内存，好处：永久代物理是堆的一部分，和新生代，老年代地址是连续的（受垃圾回收器管理），而元空间存在于本地内存（我们常说的堆外内存，不受垃圾回收器管理），这样就不受 JVM 限制了，也比较难发生OOM（都会有溢出异常）\n")])])]),_("h3",{attrs:{id:"_5-2-方法区中的垃圾回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-方法区中的垃圾回收"}},[v._v("#")]),v._v(" 5.2 方法区中的垃圾回收")]),v._v(" "),_("p",[v._v("方法区的垃圾收集主要回收两部分内容："),_("strong",[v._v("常量池中废弃的常量和不再使用的类型")]),v._v("。")]),v._v(" "),_("p",[v._v("先来说说方法区内常量池之中主要存放的两大类常量：字面量和符号引用。字面量比较接近 Java 语言层次的常量概念，如文本字符串、被声明为 final 的常量值等。而符号引用则属于编译原理方面的概念，包括下面三类常量：")]),v._v(" "),_("ul",[_("li",[v._v("类和接口的全限定名")]),v._v(" "),_("li",[v._v("字段的名称和描述符")]),v._v(" "),_("li",[v._v("方法的名称和描述符")])]),v._v(" "),_("p",[v._v("HotSpot 虚拟机对常量池的回收策略是很明确的，只要常量池中的常量没有被任何地方引用，就可以被回收")]),v._v(" "),_("p",[v._v("判定一个类型是否属于“不再被使用的类”，需要同时满足三个条件：")]),v._v(" "),_("ul",[_("li",[v._v("该类所有的实例都已经被回收，也就是 Java 堆中不存在该类及其任何派生子类的实例")]),v._v(" "),_("li",[v._v("加载该类的类加载器已经被回收，这个条件除非是经过精心设计的可替换类加载器的场景，如 OSGi、JSP 的重加载等，否则通常很难达成")]),v._v(" "),_("li",[v._v("该类对应的 java.lang.Class 对象没有在任何地方被引用，无法在任何地方通过反射访问该类的方法")])]),v._v(" "),_("p",[v._v("Java 虚拟机被允许堆满足上述三个条件的无用类进行回收，这里说的仅仅是“被允许”，而并不是和对象一样，不使用了就必然会回收。是否对类进行回收，HotSpot 虚拟机提供了 "),_("code",[v._v("-Xnoclassgc")]),v._v(" 参数进行控制，还可以使用 "),_("code",[v._v("-verbose:class")]),v._v(" 以及 "),_("code",[v._v("-XX:+TraceClassLoading")]),v._v(" 、"),_("code",[v._v("-XX:+TraceClassUnLoading")]),v._v(" 查看类加载和卸载信息。")]),v._v(" "),_("p",[v._v("在大量使用反射、动态代理、CGLib 等 ByteCode 框架、动态生成 JSP 以及 OSGi 这类频繁自定义 ClassLoader 的场景都需要虚拟机具备类卸载的功能，以保证永久代不会溢出。")])])}),[],!1,null,null,null);_.default=r.exports}}]);