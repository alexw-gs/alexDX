@isTest 
public class HelloApexV45Test {
    
    @isTest static void test1() {
        HelloApexV45 item = new HelloApexV45();
        Boolean result = item.hello().equals('This is a v45 Apex');
        System.assertEquals(result, true);
    }
}