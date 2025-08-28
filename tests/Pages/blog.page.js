export class BlogPage{
constructor(page)
{
this.page = page;

this.recentPostList= page.locator('#recent-posts-3 li a');

}

async navigate(){
   await this.page.goto('https://practice.sdetunicorns.com/');
     
}

async printRecentPosts() {
    const blogcount= await this.recentPostList.count();
        for(let i=0; i <blogcount; i++){
      const text = await this.recentPostList.nth(i).textContent();
      console.log(text);

    }
    }
}