export default function BookList() {
   let pageTitle = "My bookshelf";
   let book1 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.gramedia.com%2Fuploads%2Fitems%2FThe_Anthropocene_Reviewed.jpg&f=1&nofb=1&ipt=cd6cc78b3a5c3e6d60aa73f23d8c4b0eb01583e88df2a3451342d252d14bb0f3&ipo=images";
   let book2 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.e2AzAg-K32NTbKZsd6KqoQHaLH%26pid%3DApi&f=1&ipt=b051dfd409fe26a591af008119facd41dc9bf8485c532495e495eefcc7b82e8b&ipo=images";
   let book3 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg1.od-cdn.com%2FImageType-400%2F4847-1%2F2EF%2FD3E%2F10%2F%257B2EFD3E10-D150-4848-99C8-E5B24F047D9C%257DImg400.jpg&f=1&nofb=1&ipt=ade3c3f70a8b4cd930db023f831c1c9e0a8443c353b5be6e9bda881aef3ad482&ipo=images";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="The Anthropocene Reviewed" />
         <img src={book2} alt="Heartstopper" />
         <img src={book3} alt="The Great Alone" />
      </div>      
   );
}