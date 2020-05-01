class ItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :price, :description, :image_url, :menu
end
