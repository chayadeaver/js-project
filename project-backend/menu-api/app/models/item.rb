class Item < ApplicationRecord
    belongs_to :menu, optional: true
    validates :name, presence: true
    validates :price, presence: true
    validates :description, presence: true
end
