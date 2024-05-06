const ImageDetailPage = async ({
  params,
}: {
  params: { contentId: string };
}) => {
  return (
    <main>
      <div>
        <div>detail information</div>
        <div>contentId: {params.contentId}</div>
      </div>
    </main>
  );
};

export default ImageDetailPage;
