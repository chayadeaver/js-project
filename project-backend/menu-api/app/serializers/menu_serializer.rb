class MenuSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :items
end
